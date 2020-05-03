package com.mosa.office.kintai.gateway

import com.google.firebase.auth.FirebaseAuth
import com.mosa.office.kintai.application.service.AuthorizationResult
import com.mosa.office.kintai.application.service.Authorized
import com.mosa.office.kintai.application.service.AuthorizedUserIdService
import com.mosa.office.kintai.application.service.UnAuthorized

class FirebaseAuthorizedUserIdService(
    private val firebaseAuth: FirebaseAuth
) : AuthorizedUserIdService {
    override fun getUserId(token:String): AuthorizationResult {
        println(token); //FIXME
        return try {
            val res = firebaseAuth.verifyIdToken(token)
            Authorized(res.email) //EmailをIDとする。
        } catch (e : IllegalArgumentException) {
            UnAuthorized
        }
    }
}