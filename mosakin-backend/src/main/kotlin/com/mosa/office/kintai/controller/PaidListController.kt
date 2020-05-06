package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.usecase.*
import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidNumber
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PaidListController(
    private val getPaidListUseCase: GetPaidListUseCase,
    private val getAllUserPaidListUseCase: GetAllUserPaidListUseCase
) {

    @GetMapping("/list")
    fun getPaidList() : PaidListSummary {
        return getPaidListUseCase.getPaidSummary();
    }

    @GetMapping("/admin/list")
    fun getAllPaidList() : List<AllUserPaidListSummaryItem> {
        return getAllUserPaidListUseCase.getAllUserPaidSummary();
    }

}


