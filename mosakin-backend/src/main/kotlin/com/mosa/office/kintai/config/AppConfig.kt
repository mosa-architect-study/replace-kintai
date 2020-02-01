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
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.PropertySource
import org.springframework.core.io.ClassPathResource
import javax.annotation.PostConstruct

const val GOOGLE_AUTH_CREDENTIAL_JSON = "GOOGLE_AUTH_CREDENTIAL_JSON"

@Configuration
@PropertySource("classpath:/.deploy.properties",ignoreResourceNotFound = true)
class AppConfig(
    @Value("\${env.datasource.url}") private val url: String,
    @Value("\${env.datasource.driverClassName}") private val driverClassName : String,
    @Value("\${env.datasource.user:#{''}}") private val user : String,
    @Value("\${env.datasource.password:#{''}}") private val password : String,
    @Value("\${deploy.version:#{null}}") private val deployVersion : String?
) {

    @PostConstruct
    fun connectExposedToDatabase()  {
        println("DB Connect to $url")
        Database.connect(url,driverClassName,user,password)
    }

    @PostConstruct
    fun printDeployVersion() {
        println("VERSION: $deployVersion")
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
}


