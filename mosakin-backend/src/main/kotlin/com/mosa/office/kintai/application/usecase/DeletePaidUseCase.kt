package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.PaidRepository
import com.mosa.office.kintai.domain.model.PaidTimeType
import org.springframework.stereotype.Component
import java.time.LocalDate

@Component
class DeletePaidUseCase (
        private val paidRepository: PaidRepository,
        private val transaction : TransactionBoundary
) {
    fun delete(input:DeletePaidInputDto) {
        transaction.start {
            // TODO: Authorizationを実装
            paidRepository.delete(input.paidId)
        }

        // TODO: Slackメッセージを実装

    }

}
class DeletePaidInputDto(
        val paidId : String
)