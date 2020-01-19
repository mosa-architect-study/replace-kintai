package com.mosa.office.kintai.application.service

import org.springframework.stereotype.Component
import javax.servlet.http.HttpServletRequest

interface CurrentUserService {
    fun getUser():String;
}

@Component
class CurrentUserServiceImpl(
    private val request: HttpServletRequest,
    private val authService: AuthorizedUserIdService
) : CurrentUserService {

    override fun getUser(): String {
        val token = request.getHeader("Authorization");
        return authService.getUserId(token)
    }
}
