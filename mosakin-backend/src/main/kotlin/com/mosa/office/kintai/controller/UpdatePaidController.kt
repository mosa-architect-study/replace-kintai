package com.mosa.office.kintai.controller

import com.mosa.office.kintai.domain.model.PaidTimeType
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate

@RestController
class UpdatePaidController {

    @PostMapping("/update")
    fun update(@RequestBody updatePaidInputDto :UpdatePaidInputDto) :UpdatePaidModel {
        println(updatePaidInputDto)
        val success: Boolean = true
        return UpdatePaidModel(success)
    }
}

data class UpdatePaidModel(val noticeResult: Boolean)

data class UpdatePaidInputDto(
        val paidId : String,
        val paidAcquisitionDate : LocalDate,
        val paidTimeType : PaidTimeType,
        val paidReason : String
)