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
        println(token);
        try {
            firebaseAuth.verifyIdToken(token)
        } catch (e : IllegalArgumentException) {
            return UnAuthorized
        }
        // TODO ユーザーIDの取得
        return Authorized("00000001")
    }
}