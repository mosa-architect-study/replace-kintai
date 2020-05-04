package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.usecase.GetUserUseCase
import com.mosa.office.kintai.config.AuthenticationException
import com.mosa.office.kintai.domain.model.User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class UserController(private val getUserUseCase: GetUserUseCase) {

    @GetMapping("/user")
    fun getUser() : User{
        return getUserUseCase.getUser() ?: throw AuthenticationException();
    }

}