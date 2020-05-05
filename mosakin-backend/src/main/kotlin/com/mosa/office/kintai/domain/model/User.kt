package com.mosa.office.kintai.domain.model

data class User(
    val userName:String,
    val userId:String,
    val adminFlag:AdminFlg
)

enum class AdminFlg {
    ADMIN,COMMON;
    companion object {
        fun of(str: String):AdminFlg?{
            return values().find { it.toString() == str }
        }
    }

}

interface UserRepository {
    fun getUser(id:String):User?
}