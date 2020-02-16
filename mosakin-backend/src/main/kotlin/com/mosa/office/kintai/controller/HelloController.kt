package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.transaction.TransactionBoundary
import com.mosa.office.kintai.domain.model.*
import com.mosa.office.kintai.application.usecase.GetPaidListUseCase
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController(
    private val repository: PaidRepository,
    private val transactionBoundary: TransactionBoundary
) {

    @GetMapping("/")
    fun hello(): String {
        return "Hello MosaKin World!";
    }

    @GetMapping("/test/database")
    fun paid(): List<Paid> {
        return transactionBoundary.start {
            repository.getAllByUserId("00000001")
        }
    }

    @GetMapping("/test/err")
    fun err(): String {
        throw Exception("Err");
    }

    @GetMapping("/authenticated/verify")
    fun authenticated(): String {
        return "このアカウントは認証済みです。";
    }

}
