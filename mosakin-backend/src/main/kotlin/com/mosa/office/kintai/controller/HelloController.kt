package com.mosa.office.kintai.controller

import com.mosa.office.kintai.model.User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    @GetMapping("/hello")
    fun hello(): User {
        return User("Bob",18);
    }

}
