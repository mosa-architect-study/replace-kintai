package com.mosa.office.kintai.gateway

import com.google.firebase.auth.FirebaseAuth
import com.mosa.office.kintai.application.service.AuthorizationResult
import com.mosa.office.kintai.application.service.Authorized
import com.mosa.office.kintai.application.service.AuthorizationRepository
import com.mosa.office.kintai.application.service.UnAuthorized
import com.mosa.office.kintai.util.CacheMan

class FirebaseAuthorizationRepository(
    private val firebaseAuth: FirebaseAuth
) : AuthorizationRepository {

    private val cacheMan = CacheMan<AuthorizationResult>();

    override fun getUserId(token:String): AuthorizationResult {
        return cacheMan.getCacheOrElse {
            try {
                println(token); //FIXME
                val res = firebaseAuth.verifyIdToken(token)
                Authorized(res.email) //EmailをIDとする。
            } catch (e: IllegalArgumentException) {
                UnAuthorized
            }
        }
    }
}