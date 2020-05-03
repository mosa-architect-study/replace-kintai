package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.usecase.AddPaidInputDto
import com.mosa.office.kintai.application.usecase.AddPaidUseCase
import com.mosa.office.kintai.domain.model.DuplicatedPaidException
import com.mosa.office.kintai.application.model.SlackMessageException
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class AddPaidController(private val useCase: AddPaidUseCase) {

    @PostMapping("/add")
    fun add(@RequestBody input:AddPaidInputDto): AddPaidMessage {
        try {
            useCase.add(input)
        } catch(e:DuplicatedPaidException) {
            return AddPaidMessage.DUPLICATED
        } catch (e:SlackMessageException) {
            return AddPaidMessage.NOTIFICATION_FAILED
        }
        return AddPaidMessage.SUCCESS
    }

}

enum class AddPaidMessage{
    SUCCESS,NOTIFICATION_FAILED,DUPLICATED
}