package com.mosa.office.kintai.domain.service

import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidRepository
import com.mosa.office.kintai.domain.model.User
import org.springframework.stereotype.Component

/**
 * DomainServiceはRepositoryやDomainModelを利用してビジネスロジック的なプロセスを実行します。
 * DomainService層の利用は絶対ではなく、DomainModelのみで事足りるなら必要ないです。
 */
@Component
class PaidService (
    private val repository : PaidRepository
) {

    /**
     * 重複する有給がないかチェックして例外を投げる
     */
    fun assertNotDuplicated(paid: Paid) {
        val paidList = repository.getAllByUserId(paid.paidAcquisitionUserId)
        // 重複する有給がないかチェックして例外を投げる
        paidList.forEach(paid::assertNotDuplicated)
    }


}