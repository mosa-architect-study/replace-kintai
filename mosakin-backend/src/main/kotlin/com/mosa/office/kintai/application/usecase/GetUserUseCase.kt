package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.config.AuthenticationException
import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.model.UserRepository
import org.springframework.stereotype.Component

@Component
class GetUserUseCase(
    private val userRepository: UserRepository,
    private val transactionBoundary: TransactionBoundary
) {
    fun getUser(id: String) : User? {
        return  transactionBoundary.start { userRepository.getUser(id) };
    }
}