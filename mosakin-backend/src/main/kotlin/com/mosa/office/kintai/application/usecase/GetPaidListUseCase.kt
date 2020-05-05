package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.*
import org.springframework.stereotype.Component
import java.time.LocalDate
import java.util.*

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
            val userAnnualPaid = userAnnualPaidRepository
                .get(
                    currentUserService.getUser(),
                    LocalDate.now().year /* TODO ユーザーが入力した年数で表示 */
                ) ?: UserAnnualPaid(PaidNumber(0.0),PaidNumber(0.0)) //TODO とりあえず0を埋めてるけど、例外でもいい気がする
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
