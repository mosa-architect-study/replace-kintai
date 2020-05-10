package com.mosa.office.kintai.config

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.firebase.auth.FirebaseAuth
import com.mosa.office.kintai.application.service.AdminAuthorizationService
import com.mosa.office.kintai.application.service.CurrentUserService
import org.jetbrains.exposed.sql.Database
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.BeanCreationException
import org.springframework.beans.factory.InjectionPoint
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty
import org.springframework.boot.autoconfigure.condition.ConditionalOnResource
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Scope
import org.springframework.core.io.ClassPathResource
import java.io.InputStream
import javax.annotation.PostConstruct

const val GOOGLE_AUTH_CREDENTIAL_JSON = "GOOGLE_AUTH_CREDENTIAL_JSON"

@Configuration
class AppConfig(
    @Value("\${env.datasource.url}") private val url: String,
    @Value("\${env.datasource.driverClassName}") private val driverClassName : String,
    @Value("\${env.datasource.user:#{''}}") private val user : String,
    @Value("\${env.datasource.password:#{''}}") private val password : String
) {

    // このクラスはロガーを生成する側なのでここだけは普通に生成せざるを得ない
    private val logger : Logger = LoggerFactory.getLogger(AppConfig::class.java)

    @PostConstruct
    fun connectExposedToDatabase()  {
        logger.info("Database Url: $url")
        Database.connect(url,driverClassName,user,password)
    }

    @Bean
    fun authenticationInterceptor(service: CurrentUserService,adminAuthorizationService: AdminAuthorizationService) : AuthenticationInterceptor {
        return AuthenticationInterceptor(service,adminAuthorizationService);
    }

    @Bean
    @Scope("prototype")
    fun logger(ip : InjectionPoint): Logger {    // Logger を DI する都度に呼ばれる
        return LoggerFactory.getLogger(
            ip.methodParameter?.containingClass
                ?: ip.field?.declaringClass
                ?: throw BeanCreationException("Cannot find type for Logger")
        )
    }

    private fun streamToFirebaseAuth(input: InputStream): FirebaseAuth {
        // FirebaseAuthの構築
        val credential = GoogleCredentials.fromStream(input)
        val options = FirebaseOptions.Builder()
                .setCredentials(credential)
                .build();
        val app = FirebaseApp.initializeApp(options);
        return FirebaseAuth.getInstance(app);
    }

    @Bean
    @ConditionalOnResource(resources = ["secret/$GOOGLE_AUTH_CREDENTIAL_JSON.json"])
    fun firebaseAuthByJSON(@Value("secret/$GOOGLE_AUTH_CREDENTIAL_JSON.json") classPathJson : ClassPathResource) : FirebaseAuth {
        logger.info("Google Firebaseの設定として、リソース secret/$GOOGLE_AUTH_CREDENTIAL_JSON.json が読み込まれました。")
        return streamToFirebaseAuth(classPathJson.inputStream)
    }

    @Bean
    @ConditionalOnProperty("secret.$GOOGLE_AUTH_CREDENTIAL_JSON")
    fun firebaseAuthByENV(@Value("\${secret.$GOOGLE_AUTH_CREDENTIAL_JSON}") jsonStr: String) : FirebaseAuth {
        logger.info("Google Firebaseの設定として、プロパティ secret.$GOOGLE_AUTH_CREDENTIAL_JSON が読み込まれました。")
        return streamToFirebaseAuth(jsonStr.byteInputStream())
    }
}


