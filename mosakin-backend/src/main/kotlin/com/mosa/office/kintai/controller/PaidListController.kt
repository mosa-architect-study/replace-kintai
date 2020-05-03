package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.usecase.GetPaidListUseCase
import com.mosa.office.kintai.application.usecase.PaidListSummary
import com.mosa.office.kintai.application.usecase.PaidListSummaryHeader
import com.mosa.office.kintai.application.usecase.PaidListSummaryListItem
import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidNumber
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PaidListController(private val usecase: GetPaidListUseCase) {

    @GetMapping("/list")
    fun getPaidList() : PaidListSummaryDto {
        return PaidListSummaryDto(usecase.getPaidSummary());
    }

}

//FIXME シリアライザーとかでかっこよくやりたい
class PaidListSummaryHeaderDto(header: PaidListSummaryHeader) {
    val carryForward: Double = header.carryForward.doubleValue
    val annualPaidNumber: Double = header.annualPaidNumber.doubleValue
    val leftPaidNumber: Double = header.leftPaidNumber.doubleValue
    val currentPaidAcquisitionNumber: Double = header.currentPaidAcquisitionNumber.doubleValue
}

class PaidListSummaryDto(summary:PaidListSummary){
    val header:PaidListSummaryHeaderDto = PaidListSummaryHeaderDto(summary.header)
    val list: List<PaidListSummaryListItem> = summary.list
}

