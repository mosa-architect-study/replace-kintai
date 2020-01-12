package com.mosa.office.kintai.model

data class User(
    val userName:String,
    val userId:String,
    val adminFlag:AdminFlg
)

enum class AdminFlg {
    ADMIN,COMMON
}