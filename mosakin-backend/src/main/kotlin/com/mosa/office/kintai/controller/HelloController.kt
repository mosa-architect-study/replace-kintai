package com.mosa.office.kintai.controller

import com.mosa.office.kintai.model.AdminFlg
import com.mosa.office.kintai.model.User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    @GetMapping("/")
    fun hello(): String {
        return "Hello MosaKin World!";
    }

    @GetMapping("/user")
    fun user(): User {
        return User("Bob", "00000001", AdminFlg.AdminUser);
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
