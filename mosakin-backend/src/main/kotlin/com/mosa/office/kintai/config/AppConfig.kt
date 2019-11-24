package com.mosa.office.kintai.config

import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@Configuration
class AppConfig {

    @Bean
    fun corsFilter(): FilterRegistrationBean<CorsFilter> {
        val src = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration();
        config.allowCredentials = true;
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        src.registerCorsConfiguration("/**",config);
        val bean = FilterRegistrationBean(CorsFilter(src));
        return bean;
    }


}


