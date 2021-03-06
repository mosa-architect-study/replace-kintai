package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.*
import org.springframework.stereotype.Component
import java.time.LocalDate


fun calcPaidSummaryHeader(paidList:List<Paid>,userAnnualPaid: UserAnnualPaid):PaidListSummaryHeader{
    val currentPaidAcquisitionNumber = PaidNumber.fromTimeTypes(paidList.map { it.paidTimeType })
    return PaidListSummaryHeader(
        userAnnualPaid.carryForward,
        userAnnualPaid.annualPaidNumber,
        userAnnualPaid.annualPaidNumber minus currentPaidAcquisitionNumber,
        currentPaidAcquisitionNumber
    )
}


@Component
class GetPaidListUseCase(
    private val repository: PaidRepository,
    private val transaction : TransactionBoundary,
    private val userAnnualPaidRepository: UserAnnualPaidRepository
) {
    fun getPaidSummary(userId:String) : PaidListSummary {
        return transaction.start {
            val list = repository.getAllByUserId(userId)
            val userAnnualPaid = userAnnualPaidRepository
                .get(userId, LocalDate.now().year /* TODO ユーザーが入力した年数で表示 */)
                    ?: UserAnnualPaid(PaidNumber(0.0),PaidNumber(0.0)) //TODO とりあえず0を埋めてるけど、例外でもいい気がする
            PaidListSummary(
                calcPaidSummaryHeader(list,userAnnualPaid),
                list.map { PaidListSummaryListItem(it) }
            )
        }
    }
}

//CQRSパターン
@Component
class GetAllUserPaidListUseCase(
    private val query: AllUserPaidListSummaryListQuery,
    private val transaction : TransactionBoundary,
    private val paidRepository: PaidRepository
){
    fun getAllUserPaidSummary(userId:String) : List<AllUserPaidListSummaryItem> {
        return transaction.start {

            val paidMap = paidRepository
                .getAll()
                .groupBy { it.paidAcquisitionUserId }

            query.get(LocalDate.now().year/* TODO ユーザーが入力した年数で表示 */)
                .map {
                AllUserPaidListSummaryItem(
                    it.user,
                    calcPaidSummaryHeader(
                        paidMap[it.user.userId] ?: emptyList(),
                        it.annualPaid
                    )
                )
            }
        }
    }
}


// 有給1つ
class PaidListSummaryListItem(
    paid : Paid
) {
    val paidId = paid.paidId
    val paidAcquisitionDate = paid.paidAcquisitionDate
    val paidTimeType = paid.paidTimeType
}

// 集計結果
data class PaidListSummaryHeader(
    val carryForward : PaidNumber,
    val annualPaidNumber : PaidNumber,
    val leftPaidNumber: PaidNumber,
    val currentPaidAcquisitionNumber: PaidNumber
)


// 有給一覧および集計結果
class PaidListSummary(
    val header: PaidListSummaryHeader,
    val list: List<PaidListSummaryListItem>
)

// ユーザーごとの有給集計結果
class AllUserPaidListSummaryItem(
    val user: User,
    val header: PaidListSummaryHeader
)


// Query

// ユーザーごとの年次有給数
class AllUserPaidListSummaryListQueryResultItem(
    val user: User,
    val annualPaid: UserAnnualPaid
)

interface AllUserPaidListSummaryListQuery{
    fun get(year: Int) : List<AllUserPaidListSummaryListQueryResultItem>
}

