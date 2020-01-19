package com.mosa.office.kintai.gateway

import com.google.firebase.auth.FirebaseAuth
import com.mosa.office.kintai.application.service.AuthorizedUserIdService
import org.springframework.stereotype.Component

@Component
class FirebaseAuthorizedUserKeyService(
//    private val firebaseAuth: FirebaseAuth
) : AuthorizedUserIdService {
    override fun getUserId(token:String): String {
        println(token);
        // firebaseAuth.verifyIdToken(token)
        // TODO ユーザーIDの取得
        return "00000001"
    }
}