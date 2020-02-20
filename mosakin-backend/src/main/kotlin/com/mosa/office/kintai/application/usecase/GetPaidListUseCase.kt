package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidRepository
import org.springframework.stereotype.Component

@Component
class GetPaidListUseCase(
    private val repository: PaidRepository,
    private val transaction : TransactionBoundary,
    private val currentUserService: CurrentUserService
) {

    fun getPaidSummary() : PaidListSummary {
        return transaction.start {
            val list = repository.getAllByUserId(currentUserService.getUser())
            val currentPaidAcquisitionNumber = list
                .map { it.paidTimeType.toDays() }
                .fold(0.0) { cur, prev -> cur + prev }
            val header = PaidListSummaryHeader(
                5.0 /* FIXME */,
                13.0 /* FIXME */,
                13.0 - currentPaidAcquisitionNumber,
                currentPaidAcquisitionNumber
            )
            PaidListSummary(header,list.map { PaidListSummaryListItem(it) })
        }
    }
}

data class PaidListSummaryHeader(
    val carryForward : Double,
    val annualPaidNumber : Double,
    val leftPaidNumber: Double,
    val currentPaidAcquisitionNumber: Double
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
