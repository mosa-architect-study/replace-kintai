package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.service.UniqueIdGenerator
import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidTimeType
import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.service.PaidService
import org.springframework.stereotype.Component
import java.time.LocalDate
import com.mosa.office.kintai.domain.service.SlackService


/**
 * UseCase層はアプリケーションとしての要求をDomainServiceやDomainModel、Repositoryを利用して実現します。
 */
@Component
class AddPaidUseCase(
    private val paidService : PaidService,
    private val idGene : UniqueIdGenerator,
    private val transaction : TransactionBoundary,
    private val currentUserService: CurrentUserService,
    private val slackService: SlackService
) {
    /**
     * @param input 追加する有給
     * @param user 追加するユーザー
     */
    fun add(input: AddPaidInputDto,user: User) {
        // TODO userをどう受け取るか考える
        val paid = Paid(
            idGene.generate(), // 採番はApplication層でやりたい
            input.paidAcquisitionDate,
            input.paidTimeType,
            currentUserService.getUser(),
            input.paidReason
        )
        // トランザクション境界を設定
        transaction.start {
            paidService.add(paid)
        }
        // TODO Slackへの通知
        // TODO 送る文字列の作成
        slackService.postSlackMessage(" \n新規： *" + "ユーザー名" + "*\n日時： *" + input.paidAcquisitionDate + " (" +  ")" + "  [" + input.paidTimeType + "]*\n```\n" + input.paidReason + "```")
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