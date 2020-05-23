package com.mosa.office.kintai.domain.service

import com.mosa.office.kintai.domain.model.*
import com.mosa.office.kintai.domain.shared.DomainAuthorizationException
import org.springframework.stereotype.Component

/**
 * DomainServiceはRepositoryやDomainModelを利用してビジネスロジック的なプロセスを実行します。
 * DomainService層の利用は絶対ではなく、DomainModelのみで事足りるなら必要ないです。
 */
@Component
class PaidService (
    private val repository : PaidRepository,
    private val userRepository: UserRepository
) {
    /**
     * 重複する有給がないかチェックして例外を投げる
     */
    fun assertNotDuplicated(paid: Paid) {
        val paidList = repository
                .getAllByUserId(paid.paidAcquisitionUserId)
                .filter { it.paidId != paid.paidId } //更新処理の際に更新前の有給が重複チェックで引っかかるので、自分自身は外す。
        // 重複する有給がないかチェックして例外を投げる
        paidList.forEach(paid::assertNotDuplicated)
    }

    fun assertCanUpdateOrDelete(paid: Paid,updatedBy: String) {
        val user = userRepository.getUser(updatedBy)
        (user?.let { paid.canAccess(it) } ?: false) || throw DomainAuthorizationException()
    }

}