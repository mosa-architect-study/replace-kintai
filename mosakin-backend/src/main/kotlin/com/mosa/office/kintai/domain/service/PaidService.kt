package com.mosa.office.kintai.domain.service

import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidRepository
import com.mosa.office.kintai.domain.model.User
import org.springframework.stereotype.Component

@Component
class PaidService (
    private val repository : PaidRepository
) {
    fun add(paid: Paid,user: User) {
        val paidList = repository.getAllByUserId(user.userId)
        paid.assertNotDuplicated(paidList);
        repository.add(paid)
    }
}