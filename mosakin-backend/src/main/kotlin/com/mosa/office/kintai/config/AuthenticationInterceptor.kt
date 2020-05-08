package com.mosa.office.kintai.config

import com.mosa.office.kintai.application.service.AdminAuthorizationService
import com.mosa.office.kintai.application.service.CurrentUserService
import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class AuthenticationInterceptor(
    private val service: CurrentUserService,
    private val adminAuthorizationService: AdminAuthorizationService
) : HandlerInterceptor {
    @Throws(Exception::class)
    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        //プリフライトはtrue
        if(request.method == "OPTIONS"){
            return true;
        }
        service.getUserId()
        if(request.requestURI.startsWith("/admin")) {
            adminAuthorizationService.assertAdminUser()
        }
        return true;
    }
}
