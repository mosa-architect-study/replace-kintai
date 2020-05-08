package com.mosa.office.kintai.application.service

import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.AdminFlg
import com.mosa.office.kintai.domain.model.UserRepository
import org.springframework.stereotype.Component

@Component
class AdminAuthorizationService (
        private val currentUserService: CurrentUserService,
        private val userRepository: UserRepository,
        private val transactionBoundary: TransactionBoundary
) {

    fun assertAdminUser() {
        transactionBoundary.start {
            val userId = currentUserService.getUserId()
            val user = userRepository.getUser(userId)
            if(user?.adminFlag != AdminFlg.ADMIN) throw AuthenticationException()
        }
    }

}
