package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.*
import org.springframework.stereotype.Component

@Component
class GetPaidListUseCase(
    private val repository: PaidRepository,
    private val transaction : TransactionBoundary,
    private val currentUserService: CurrentUserService,
    private val userAnnualPaidRepository: UserAnnualPaidRepository
) {

    fun getPaidSummary() : PaidListSummary {
        return transaction.start {
            val list = repository.getAllByUserId(currentUserService.getUser())
            val userAnnualPaid = userAnnualPaidRepository.get(currentUserService.getUser(),2020) //TODO
            val currentPaidAcquisitionNumber = PaidNumber.fromTimeTypes(list.map { it.paidTimeType })
            val header = PaidListSummaryHeader(
                userAnnualPaid.carryForward,
                userAnnualPaid.annualPaidNumber,
                userAnnualPaid.annualPaidNumber minus currentPaidAcquisitionNumber,
                currentPaidAcquisitionNumber
            )
            PaidListSummary(header,list.map { PaidListSummaryListItem(it) })
        }
    }
}

data class PaidListSummaryHeader(
    val carryForward : PaidNumber,
    val annualPaidNumber : PaidNumber,
    val leftPaidNumber: PaidNumber,
    val currentPaidAcquisitionNumber: PaidNumber
)

class PaidListSummaryListItem(
    paid : Paid
) {
    val paidId = paid.paidId
    val paidAcquisitionDate = paid.paidAcquisitionDate
    val paidTimeType = paid.paidTimeType
}

class PaidListSummary(
    val header:PaidListSummaryHeader,
    val list: List<PaidListSummaryListItem>
)
