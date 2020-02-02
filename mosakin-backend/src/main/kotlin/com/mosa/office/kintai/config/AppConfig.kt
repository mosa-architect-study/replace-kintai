package com.mosa.office.kintai.config

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.firebase.auth.FirebaseAuth
import com.mosa.office.kintai.application.service.AuthorizedUserIdService
import com.mosa.office.kintai.application.service.CurrentUserHolder
import com.mosa.office.kintai.gateway.FirebaseAuthorizedUserIdService
import com.mosa.office.kintai.gateway.mocks.MockAuthorizedUserIdService
import org.jetbrains.exposed.sql.Database
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.BeanCreationException
import org.springframework.beans.factory.InjectionPoint
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Scope
import org.springframework.core.io.ClassPathResource
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
    fun authorizedUserIdService(
        @Value("\${secret.$GOOGLE_AUTH_CREDENTIAL_JSON:#{null}}") jsonStr: String?,
        @Value("secret/$GOOGLE_AUTH_CREDENTIAL_JSON.json") classPathJson : ClassPathResource
    ) : AuthorizedUserIdService {

        val jsonInput =
            jsonStr?.byteInputStream() ?: // HEROKUからは環境変数でJSONが渡ってくる。
            if(classPathJson.exists()) classPathJson.inputStream else // ローカルならsecretディレクトリに配置すれば試せる。
            return MockAuthorizedUserIdService() //どちらもない場合はMockサービス

        // FirebaseAuthの構築
        val credential = GoogleCredentials.fromStream(jsonInput)
        val options = FirebaseOptions.Builder()
            .setCredentials(credential)
            .build();
        val app = FirebaseApp.initializeApp(options);
        val auth = FirebaseAuth.getInstance(app);

        // Firebaseを使った認証サービス
        return FirebaseAuthorizedUserIdService(auth);

    }

    @Bean
    fun authenticationInterceptor(service:AuthorizedUserIdService,holder:CurrentUserHolder) : AuthenticationInterceptor {
        return AuthenticationInterceptor(service,holder);
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
}


