package com.mosa.office.kintai.gateway.mocks

import com.mosa.office.kintai.application.service.AuthorizationResult
import com.mosa.office.kintai.application.service.Authorized
import com.mosa.office.kintai.application.service.AuthorizationRepository

class MockAuthorizationRepository : AuthorizationRepository {
    override fun getUserId(token:String): AuthorizationResult {
        println("TOKEN : $token");
        // TODO ユーザーIDの取得
        return Authorized("00000001")
    }
}