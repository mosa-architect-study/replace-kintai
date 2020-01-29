package com.mosa.office.kintai.config

import com.mosa.office.kintai.application.service.Authorized
import com.mosa.office.kintai.application.service.AuthorizedUserIdService
import com.mosa.office.kintai.application.service.CurrentUserHolder
import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class AuthenticationInterceptor(
    private val service: AuthorizedUserIdService,
    private val holder: CurrentUserHolder
) : HandlerInterceptor {

    @Throws(Exception::class)
    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        //プリフライトはtrue
        if(request.method == "OPTIONS"){
            return true;
        }
        val token = request.getHeader("Authorization");
        if(token != null)
            when(val result = service.getUserId(token) ) {
                is Authorized -> {
                    holder.setUserId(result.userId);
                    return true;
                }
            }
        throw AuthenticationException();
    }
}

class AuthenticationException : Exception() {}