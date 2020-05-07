package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.model.SlackMessageException
import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.usecase.UpdatePaidInputDto
import com.mosa.office.kintai.application.usecase.UpdatePaidUseCase
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class UpdatePaidController(
    private val useCase: UpdatePaidUseCase,
    private val currentUserService: CurrentUserService
) {

    @PostMapping("/update")
    fun update(@RequestBody updatePaidInputDto : UpdatePaidInputDto) : UpdatePaidMessage {
        try {
            useCase.update(currentUserService.getUser(), updatePaidInputDto)
        } catch(e:SlackMessageException) {
           return UpdatePaidMessage.SUCCESS
        } catch (e:SlackMessageException) {
            return UpdatePaidMessage.NOTIFICATION_FAILED
        }
        return UpdatePaidMessage.SUCCESS
    }
}

data class UpdatePaidModel(val noticeResult: Boolean, val message: String)

enum class UpdatePaidMessage{
    SUCCESS,NOTIFICATION_FAILED,DUPLICATED
}