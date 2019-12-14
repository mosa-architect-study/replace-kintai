package com.mosa.office.kintai.usecase

import com.mosa.office.kintai.model.Paid
import com.mosa.office.kintai.model.UserId
import org.springframework.stereotype.Component

interface PaidListRepository {
    fun getAll(userId:UserId) : List<Paid>
}

@Component
class GetPaidListUseCase(repo: PaidListRepository) {

    private val repository = repo

    fun getPaidList(userId:UserId) : List<Paid> {
        return repository.getAll(userId);
    }

}
