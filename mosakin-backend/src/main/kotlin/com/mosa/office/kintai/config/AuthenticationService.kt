package com.mosa.office.kintai.config

import com.google.firebase.auth.FirebaseAuth
import com.mosa.office.kintai.domain.model.User
import java.lang.IllegalArgumentException

interface AuthenticationService {
    fun verifyToken(token: String) : Boolean;
//    fun getUserByToken(token: String): User;
}

class FirebaseAuthenticationService(private val firebaseAuth: FirebaseAuth) : AuthenticationService {
    override fun verifyToken(token: String): Boolean {
        return try {
            val varified = firebaseAuth.verifyIdToken(token);
            println("認証成功!! ${varified.email}")
            true;
        } catch (e:IllegalArgumentException) {
            false;
        }
    }
}

class DefaultAuthenticationService : AuthenticationService {
    override fun verifyToken(token: String): Boolean {
        return true;
    }
}

