package com.mosa.office.kintai.controller

import com.mosa.office.kintai.model.*
import com.mosa.office.kintai.usecase.GetPaidListUseCase
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController(_useCase: GetPaidListUseCase) {

    val useCase = _useCase;

    @GetMapping("/")
    fun hello(): String {
        return "Hello MosaKin World!";
    }

    @GetMapping("/user")
    fun user(): User {
        return User(UserName("Bob") , UserId("00000001"), AdminFlg.ADMIN);
    }

    @GetMapping("/orm-sample")
    fun paid(): List<Paid> {
        return useCase.getPaidList(UserId("00000001"))
    }

    @GetMapping("/err")
    fun err(): String {
        throw Exception("Err");
    }

    @GetMapping("/authenticated/verify")
    fun authenticated(): String {
        return "このアカウントは認証済みです。";
    }

}
