package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.model.SlackUpdatePaidInfo
import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.service.SlackService
import com.mosa.office.kintai.application.service.UniqueIdGenerator
import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.HasPaidTime
import com.mosa.office.kintai.domain.model.PaidTimeType
import org.springframework.stereotype.Component
import java.time.LocalDate

/**
 * UseCase層はアプリケーションとしての要求をDomainServiceやDomainModel、Repositoryを利用して実現します。
 */
@Component
class UpdatePaidUseCase(
    private val idGene : UniqueIdGenerator,
    private val transaction : TransactionBoundary,
    private val currentUserService: CurrentUserService,
    private val slackService: SlackService
) {
    /**
     * @param input 更新する有給
     */
    fun update(input: UpdatePaidInputDto) {
        // TODO userをどう受け取るか考える
        val paid = UpdatePaid(
            input.paidId,
            input.beforeAcquisitionDate,
            input.paidAcquisitionDate,
            input.beforePaidTimeType,
            input.paidTimeType,
            currentUserService.getUser(),
            input.paidReason
        )
        // トランザクション境界を設定
        transaction.start {
            // TODO update処理
            // updateService.update(paid)
        }
        val sLackMessage = SlackUpdatePaidInfo(
                input.beforeAcquisitionDate,
                input.paidAcquisitionDate,
                input. beforePaidTimeType,
                input.paidTimeType,
                input.paidReason
        )
        slackService.postUpdateSlackMessage(sLackMessage)
    }

}

class UpdatePaidInputDto(
    val paidId : String,
    val beforeAcquisitionDate : LocalDate,
    val paidAcquisitionDate : LocalDate,
    val beforePaidTimeType: PaidTimeType,
    val paidTimeType : PaidTimeType,
    val paidReason : String
)
class UpdatePaid (
        val paidId : String,
        val beforePaidAcquisitionDate: LocalDate,
        override val paidAcquisitionDate : LocalDate,
        val beforePaidTimeType : PaidTimeType,
        override val paidTimeType : PaidTimeType,
        val paidAcquisitionUserId : String,
        val paidReason : String
)  : HasPaidTime(paidAcquisitionDate,paidTimeType)