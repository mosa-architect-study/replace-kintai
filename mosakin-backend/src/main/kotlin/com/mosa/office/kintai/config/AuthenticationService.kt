package com.mosa.office.kintai.config

import com.google.firebase.auth.FirebaseAuth

interface AuthenticationService {
    fun verifyToken(token: String) : Boolean ;
}

class FirebaseAuthenticationService(private val firebaseAuth: FirebaseAuth) : AuthenticationService {
    override fun verifyToken(token: String): Boolean {
        val varified = firebaseAuth.verifyIdToken(token);
        println("認証成功!! ${varified.email}")
        return true
    }

}

class DefaultAuthenticationService : AuthenticationService {
    override fun verifyToken(token: String): Boolean {
        return true;
    }
}

