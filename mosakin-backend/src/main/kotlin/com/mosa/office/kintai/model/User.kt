package com.mosa.office.kintai.model

data class User(
    val userName:UserName,
    val userId:UserId,
    val adminFlag:AdminFlg
)

data class UserId(val value:String);
data class UserName(val value:String);
enum class AdminFlg {
    ADMIN,COMMON
}