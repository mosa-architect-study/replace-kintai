package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.usecase.GetPaidListUseCase
import com.mosa.office.kintai.application.usecase.PaidListSummary
import com.mosa.office.kintai.domain.model.Paid
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PaidListController(private val usecase: GetPaidListUseCase) {

    @GetMapping("/list")
    fun getPaidList() : PaidListSummary {
        return usecase.getPaidSummary();
    }

}