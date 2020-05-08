package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.usecase.*
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class PaidListController(
        private val getPaidListUseCase: GetPaidListUseCase,
        private val getAllUserPaidListUseCase: GetAllUserPaidListUseCase,
        private val currentUserService: CurrentUserService
        ) {

    @GetMapping("/list")
    fun getPaidList() : PaidListSummary {
        return getPaidListUseCase.getPaidSummary(currentUserService.getUserId());
    }

    @GetMapping("/admin/list")
    fun getAllPaidList() : List<AllUserPaidListSummaryItem> {
        return getAllUserPaidListUseCase.getAllUserPaidSummary(currentUserService.getUserId());
    }

    @GetMapping("/admin/list/{id}")
    fun getAllPaidListById(@PathVariable("id") userId : String) : PaidListSummary {
        return getPaidListUseCase.getPaidSummary(userId);
    }

}


