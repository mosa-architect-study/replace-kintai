package com.mosa.office.kintai.config

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.firebase.auth.FirebaseAuth
import org.jetbrains.exposed.sql.Database
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
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

    @PostConstruct
    fun connectExposedToDatabase()  {
        println("DB Connect to $url")
        Database.connect(url,driverClassName,user,password)
    }

    @Bean
    fun authenticationService(
        @Value("\${secret.$GOOGLE_AUTH_CREDENTIAL_JSON:#{null}}") jsonStr: String?,
        @Value("secret/$GOOGLE_AUTH_CREDENTIAL_JSON.json") classPathJson : ClassPathResource
    ) : AuthenticationService {

        val jsonInput =
            jsonStr?.byteInputStream() ?: // HEROKUからは環境変数でJSONが渡ってくる。
            if(classPathJson.exists()) classPathJson.inputStream else // ローカルならsecretディレクトリに配置すれば試せる。
            return DefaultAuthenticationService() //どちらもない場合はデフォルトサービス

        // FirebaseAuthの構築
        val credential = GoogleCredentials.fromStream(jsonInput)
        val options = FirebaseOptions.Builder()
            .setCredentials(credential)
            .build();
        val app = FirebaseApp.initializeApp(options);
        val auth = FirebaseAuth.getInstance(app);

        // Firebaseを使った認証サービス
        return FirebaseAuthenticationService(auth);

    }

    @Bean
    fun authenticationInterceptor(service:AuthenticationService) : AuthenticationInterceptor {
        return AuthenticationInterceptor(service);
    }
}


