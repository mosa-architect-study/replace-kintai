package com.mosa.office.kintai.application.service

import org.springframework.stereotype.Component
import org.springframework.web.context.annotation.RequestScope

interface CurrentUserService {
    fun getUser():String;
}

interface CurrentUserHolder {
    fun setUserId(userId:String);
}

@Component
@RequestScope
class IdHolderCurrentUserServiceImpl() : CurrentUserService,CurrentUserHolder {

    private var _userId : String? = null;

    override fun getUser(): String {
        return _userId ?: throw NullPointerException("userIdが初期化されていません。")
    }
    override fun setUserId(userId: String) {
        _userId !== null && throw Exception("userIdが上書きされようとしました。")
        _userId = userId;
    }
}
