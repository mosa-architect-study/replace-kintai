package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.service.AuthenticationException
import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.usecase.GetUserUseCase
import com.mosa.office.kintai.domain.model.User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class UserController(
        private val getUserUseCase: GetUserUseCase,
        private val currentUserService: CurrentUserService
)
{
    @GetMapping("/user")
    fun getUser() : User{
        val id = currentUserService.getUserId();
        return getUserUseCase.getUser(id) ?: throw AuthenticationException();
    }

}