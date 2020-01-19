package com.mosa.office.kintai.application.service

interface AuthorizedUserIdService {
    fun getUserId(token:String):String
}
