package com.mosa.office.kintai.controller

import com.mosa.office.kintai.model.*
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime

@RestController
class HelloController {

    @GetMapping("/")
    fun hello(): String {
        return "Hello MosaKin World!";
    }

    @GetMapping("/user")
    fun user(): User {
        return User(UserName("Bob") , UserId("00000001"), AdminFlg.ADMIN);
    }

    @GetMapping("/paid")
    fun paid(): Paid {
        return Paid(
            PaidAcquisitionDate(LocalDateTime.now()),
            PaidTimeType.ALL_DAY,
            UserId("00000002"),
            PaidReason("腹痛のため")
        );
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
