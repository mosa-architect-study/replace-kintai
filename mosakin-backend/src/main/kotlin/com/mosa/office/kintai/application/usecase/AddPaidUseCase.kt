package com.mosa.office.kintai.application.usecase

import com.mosa.office.kintai.application.service.UniqueIdGenerator
import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidTimeType
import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.service.PaidService
import org.springframework.stereotype.Component
import java.time.LocalDate

@Component
class AddPaidUseCase(
    private val paidService : PaidService,
    private val idGene : UniqueIdGenerator
) {
    fun add(input: AddPaidInputDto,user: User) {
        val paid = Paid(
            idGene.generate(),
            input.paidAcquisitionDate,
            input.paidTimeType,
            input.paidAcquisitionUserId,
            input.paidReason
        )
        paidService.add(paid,user)
    }

}

class AddPaidInputDto(
    val paidAcquisitionDate : LocalDate,
    val paidTimeType : PaidTimeType,
    val paidAcquisitionUserId : String,
    val paidReason : String
)