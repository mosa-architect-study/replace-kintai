package com.mosa.office.kintai.application.service

import org.springframework.stereotype.Component
import org.springframework.web.context.annotation.RequestScope
import java.lang.RuntimeException
import javax.servlet.http.HttpServletRequest

interface CurrentUserService {
    fun getUserId():String;
}

@Component
@RequestScope
class CurrentUserServiceImpl(
        private val repository: AuthorizationRepository,
        private val request: HttpServletRequest
) : CurrentUserService {

    override fun getUserId(): String {
        (request.getHeader("Authorization")?.let{ repository.getUserId(it) } ).let {
            when(it) {
                is Authorized -> return it.userId
                is UnAuthorized, null -> throw AuthenticationException()
            }
        }
    }
}

interface AuthorizationRepository {
    fun getUserId(token:String):AuthorizationResult
}

sealed class AuthorizationResult
class Authorized(val userId : String) : AuthorizationResult();
object UnAuthorized : AuthorizationResult();

class AuthenticationException : RuntimeException()
