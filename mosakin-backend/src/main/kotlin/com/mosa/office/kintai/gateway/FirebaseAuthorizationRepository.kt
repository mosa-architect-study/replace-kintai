package com.mosa.office.kintai.gateway

import com.google.firebase.auth.FirebaseAuth
import com.mosa.office.kintai.application.service.AuthorizationResult
import com.mosa.office.kintai.application.service.Authorized
import com.mosa.office.kintai.application.service.AuthorizationRepository
import com.mosa.office.kintai.application.service.UnAuthorized
import com.mosa.office.kintai.util.CacheMan
import org.slf4j.Logger
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean
import org.springframework.stereotype.Component
import org.springframework.web.context.annotation.RequestScope

@Component
@ConditionalOnBean(FirebaseAuth::class)
@RequestScope
class FirebaseAuthorizationRepository(
    private val firebaseAuth: FirebaseAuth,
    private val logger: Logger
) : AuthorizationRepository {

    private val cacheMan = CacheMan<AuthorizationResult>();

    override fun getUserId(token:String): AuthorizationResult {
        return cacheMan.getCacheOrElse {
            try {
                val res = firebaseAuth.verifyIdToken(token)
                logger.debug("$res.emailからのアクセス")
                Authorized(res.email) //EmailをIDとする。
            } catch (e: IllegalArgumentException) {
                UnAuthorized
            }
        }
    }
}