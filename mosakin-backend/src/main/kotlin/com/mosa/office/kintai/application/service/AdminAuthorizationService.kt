package com.mosa.office.kintai.application.service

import com.mosa.office.kintai.config.AuthenticationException
import com.mosa.office.kintai.domain.model.AdminFlg
import com.mosa.office.kintai.domain.model.UserRepository
import org.springframework.stereotype.Component

@Component
class AdminAuthorizationService (
        private val currentUserService: CurrentUserService,
        private val userRepository: UserRepository
) {

    fun assertAdminUser() {
        val userId = currentUserService.getUser()
        val user = userRepository.getUser(userId)
        if(user?.adminFlag != AdminFlg.ADMIN) throw AuthenticationException()
    }

}
