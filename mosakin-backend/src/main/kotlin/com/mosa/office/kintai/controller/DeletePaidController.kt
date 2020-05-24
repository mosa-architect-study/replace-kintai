package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.usecase.DeletePaidInputDto
import com.mosa.office.kintai.application.usecase.DeletePaidUseCase
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class DeletePaidController(
    private val useCase: DeletePaidUseCase,

    private val currentUserService: CurrentUserService
) {

    @PostMapping("/delete")
    fun delete(@RequestBody input : DeletePaidInputDto) :DeletePaidMessage {
        useCase.delete(input,currentUserService.getUserId())
        return DeletePaidMessage.SUCCESS
    }

}

enum class DeletePaidMessage{
    SUCCESS,NOTIFICATION_FAILED
}
