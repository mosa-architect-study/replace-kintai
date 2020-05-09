package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.model.SlackUpdatePaidInfo
import com.mosa.office.kintai.application.service.SlackService
import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.HasPaidTime
import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidRepository
import com.mosa.office.kintai.domain.model.PaidTimeType
import com.mosa.office.kintai.domain.service.PaidService
import org.springframework.stereotype.Component
import java.time.LocalDate

/**
 * UseCase層はアプリケーションとしての要求をDomainServiceやDomainModel、Repositoryを利用して実現します。
 */
@Component
class UpdatePaidUseCase(
    private val transaction : TransactionBoundary,
    private val paidRepository: PaidRepository,
    private val paidService: PaidService,
    private val slackService: SlackService
) {
    /**
     * @param input 更新する有給
     */
    fun update(input: UpdatePaidInputDto) {
        // TODO userをどう受け取るか考える
        val paid = Paid(
            input.paidId,
            input.paidAcquisitionDate,
            input.paidTimeType,
                input.paidAcquisitionUserId,
            input.paidReason
        )
        // トランザクション境界を設定
        transaction.start {
            paidService.assertNotDuplicated(paid)
            paidRepository.update(paid)
        }
        val slackMessage = SlackUpdatePaidInfo(
                input.beforeAcquisitionDate,
                input.paidAcquisitionDate,
                input. beforePaidTimeType,
                input.paidTimeType,
                input.paidReason
        )
        slackService.postUpdateSlackMessage(slackMessage)
    }

}

class UpdatePaidInputDto(
    val paidId : String,
    val beforeAcquisitionDate : LocalDate,
    val paidAcquisitionDate : LocalDate,
    val beforePaidTimeType: PaidTimeType,
    val paidTimeType : PaidTimeType,
    val paidAcquisitionUserId : String,
    val paidReason : String
)