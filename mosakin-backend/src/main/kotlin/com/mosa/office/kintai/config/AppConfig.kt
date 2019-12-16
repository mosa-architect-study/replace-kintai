package com.mosa.office.kintai.config

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.firebase.auth.FirebaseAuth
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ByteArrayResource
import org.springframework.core.io.ClassPathResource

const val GOOGLE_AUTH_CREDENTIAL_JSON = "GOOGLE_AUTH_CREDENTIAL_JSON"

@Configuration
class AppConfig {

    @Bean
    fun authenticationService(@Value("\${secret.$GOOGLE_AUTH_CREDENTIAL_JSON:#{null}}") jsonStr: String?) : AuthenticationService {

        val jsonResource = if(jsonStr != null)
            ByteArrayResource(jsonStr.toByteArray()) else
            ClassPathResource("secret/$GOOGLE_AUTH_CREDENTIAL_JSON.json");

        if(!jsonResource.exists()) {
            return DefaultAuthenticationService();
        }

        val credential = GoogleCredentials.fromStream(jsonResource.inputStream)
        val options = FirebaseOptions.Builder()
            .setCredentials(credential)
            .build();
        val app = FirebaseApp.initializeApp(options);
        val auth = FirebaseAuth.getInstance(app);

        return FirebaseAuthenticationService(auth);

    }

    @Bean
    fun authenticationInterceptor(service:AuthenticationService) : AuthenticationInterceptor {
        return AuthenticationInterceptor(service);
    }
}


