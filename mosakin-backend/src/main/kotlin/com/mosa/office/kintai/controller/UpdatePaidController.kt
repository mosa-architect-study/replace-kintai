package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.model.SlackMessageException
import com.mosa.office.kintai.application.service.AuthenticationException
import com.mosa.office.kintai.application.service.CurrentUserService
import com.mosa.office.kintai.application.usecase.UpdatePaidInputDto
import com.mosa.office.kintai.application.usecase.UpdatePaidUseCase
import com.mosa.office.kintai.domain.model.DuplicatedPaidException
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
            useCase.update(
                updatePaidInputDto,
                currentUserService.getUserId()
            )
        } catch(e:DuplicatedPaidException) {
           return UpdatePaidMessage.DUPLICATED
        } catch (e:SlackMessageException) {
            return UpdatePaidMessage.NOTIFICATION_FAILED
        }
        return UpdatePaidMessage.SUCCESS
    }
}

enum class UpdatePaidMessage{
    SUCCESS,NOTIFICATION_FAILED,DUPLICATED
}