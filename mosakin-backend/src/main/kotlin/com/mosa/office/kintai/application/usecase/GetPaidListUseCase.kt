package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.transaction.transaction
import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidRepository
import org.springframework.stereotype.Component

@Component
class GetPaidListUseCase(private val repository: PaidRepository) {

    fun getPaidList(userId:String) : List<Paid> {
        // トランザクション境界を設定
        return transaction {
            repository.getAllByUserId(userId)
        }
    }

}
