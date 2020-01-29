package com.mosa.office.kintai.application.service

interface AuthorizedUserIdService {
    fun getUserId(token:String):AuthorizationResult
}

sealed class AuthorizationResult
class Authorized(val userId : String) : AuthorizationResult();
object UnAuthorized : AuthorizationResult();



