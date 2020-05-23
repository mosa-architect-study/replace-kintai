package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.model.SlackUpdatePaidInfo
import com.mosa.office.kintai.application.service.SlackService
import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.*
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
    fun update(input: UpdatePaidInputDto,updatedBy:String) {

        // トランザクション境界を設定
        transaction.start {
            val paid = paidRepository.getById(input.paidId) ?: throw Exception("指定された有給が見つかりません") //TODO 404的な
            paid.paidTimeType = input.paidTimeType
            paid.paidAcquisitionDate = input.paidAcquisitionDate
            paidService.assertCanUpdateOrDelete(paid,updatedBy)
            paidService.assertNotDuplicated(paid)
            paidRepository.update(paid)
        }

        val slackMessage = SlackUpdatePaidInfo(
                input.beforeAcquisitionDate,
                input.paidAcquisitionDate,
                input.beforePaidTimeType,
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
    val paidReason : String
)