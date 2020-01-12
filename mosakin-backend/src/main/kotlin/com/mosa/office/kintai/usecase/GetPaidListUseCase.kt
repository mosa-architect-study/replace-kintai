package com.mosa.office.kintai.usecase

import com.mosa.office.kintai.model.Paid
import org.springframework.stereotype.Component

interface PaidListRepository {
    fun getAll(userId:String) : List<Paid>
}

@Component
class GetPaidListUseCase(repo: PaidListRepository) {

    private val repository = repo

    fun getPaidList(userId:String) : List<Paid> {
        return repository.getAll(userId);
    }

}
