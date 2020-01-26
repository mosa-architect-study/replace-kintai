package com.mosa.office.kintai.application.service

import org.springframework.stereotype.Component
import org.springframework.web.context.annotation.RequestScope
import javax.servlet.http.HttpServletRequest

interface CurrentUserService {
    fun getUser():String;
}

interface CurrentUserHolder {
    fun setUserId(userId:String);
}

//@Component
//class CurrentUserServiceImpl(
//    private val request: HttpServletRequest,
//    private val authService: AuthorizedUserIdService
//) : CurrentUserService {
//    override fun getUser(): String {
//        val token = request.getHeader("Authorization");
//        return when(val result = authService.getUserId(token)){
//            is Authorized -> result.userId
//            is UnAuthorized -> throw Exception("認証に失敗しました。");
//        }
//    }
//}

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
