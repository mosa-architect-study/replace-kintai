package com.mosa.office.kintai.gateway.mocks

import com.google.firebase.auth.FirebaseAuth
import com.mosa.office.kintai.application.service.AuthorizationResult
import com.mosa.office.kintai.application.service.Authorized
import com.mosa.office.kintai.application.service.AuthorizationRepository
import org.slf4j.Logger
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean
import org.springframework.context.annotation.Profile
import org.springframework.stereotype.Component

@Component
@ConditionalOnMissingBean(FirebaseAuth::class)
@Profile(value = ["dev","default"])
class MockAuthorizationRepository(
        logger: Logger
) : AuthorizationRepository {
    init {
        logger.warn("Mock Implementation")
    }
    override fun getUserId(token:String): AuthorizationResult {
        return Authorized("00000001")
    }
}