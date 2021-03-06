package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.model.SlackAddPaidInfo
import com.mosa.office.kintai.application.service.SlackService
import com.mosa.office.kintai.application.service.UniqueIdGenerator
import com.mosa.office.kintai.application.transaction.TransactionBoundary
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
class AddPaidUseCase(
    private val paidService : PaidService,
    private val idGene : UniqueIdGenerator,
    private val transaction : TransactionBoundary,
    private val slackService: SlackService,
    private val paidRepository: PaidRepository
) {
    /**
     * @param input 追加する有給
     */
    fun add(userId: String, input: AddPaidInputDto) {
        // TODO userをどう受け取るか考える
        val paid = Paid(
            idGene.generate(), // 採番はApplication層でやりたい
            input.paidAcquisitionDate,
            input.paidTimeType,
                userId,
            input.paidReason
        )
        // トランザクション境界を設定
        transaction.start {
            paidService.assertNotDuplicated(paid)
            paidRepository.add(paid)
        }
        val sLackMessage = SlackAddPaidInfo(
                input.paidAcquisitionDate,
                input.paidTimeType,
                input.paidReason
        )
        slackService.postAddSlackMessage(sLackMessage)
    }

}

/**
 * UseCaseのinputとなるDto
 * このままControllerの引数にするのもアリだけど
 */
class AddPaidInputDto(
    val paidAcquisitionDate : LocalDate,
    val paidTimeType : PaidTimeType,
    val paidReason : String
)