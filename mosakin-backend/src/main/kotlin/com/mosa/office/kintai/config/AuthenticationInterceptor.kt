package com.mosa.office.kintai.config

import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class AuthenticationInterceptor(private val service: AuthenticationService) : HandlerInterceptor {

    @Throws(Exception::class)
    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        //プリフライトはtrue
        if(request.method == "OPTIONS"){
            return true;
        }
        val token = request.getHeader("Authorization");
        if(token != null){
            return service.verifyToken(token);
        }
        throw Exception("Auth")
    }
}