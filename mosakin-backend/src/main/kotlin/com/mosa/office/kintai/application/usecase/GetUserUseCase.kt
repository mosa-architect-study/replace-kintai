package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.config.AuthenticationException
import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.model.UserRepository
import org.springframework.stereotype.Component

@Component
class GetUserUseCase(
    private val currentUserService: CurrentUserService,
    private val userRepository: UserRepository
) {
    fun getUser() : User? {
        val id = currentUserService.getUser();
        return userRepository.getUser(id);
    }
}