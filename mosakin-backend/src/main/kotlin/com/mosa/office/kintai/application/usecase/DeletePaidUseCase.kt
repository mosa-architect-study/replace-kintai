package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.PaidRepository
import com.mosa.office.kintai.domain.model.PaidTimeType
import com.mosa.office.kintai.domain.service.PaidService
import org.springframework.stereotype.Component
import java.time.LocalDate

@Component
class DeletePaidUseCase (
        private val paidRepository: PaidRepository,
        private val paidService: PaidService,
        private val transaction : TransactionBoundary
) {
    fun delete(input:DeletePaidInputDto,deletedBy:String) {
        transaction.start {
            val paid = paidRepository.getById(input.paidId) ?: throw Exception("指定された有給が見つかりません") //TODO 404的な
            paidService.assertCanUpdateOrDelete(paid,deletedBy)
            paidRepository.delete(paid)
        }

        // TODO: Slackメッセージを実装

    }

}
class DeletePaidInputDto(
        val paidId : String
)