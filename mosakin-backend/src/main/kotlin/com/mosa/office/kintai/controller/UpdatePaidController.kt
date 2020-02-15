package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.model.SlackMessageException
import com.mosa.office.kintai.application.usecase.UpdatePaidInputDto
import com.mosa.office.kintai.application.usecase.UpdatePaidUseCase
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class UpdatePaidController(private val useCase: UpdatePaidUseCase) {

    @PostMapping("/update")
    fun update(@RequestBody updatePaidInputDto : UpdatePaidInputDto) : UpdatePaidModel {
        try {
            useCase.update(updatePaidInputDto)
        } catch(e:Exception) {
            println(e)
            return when(e){
                // TODO 更新内容が変わっていなかったらエラーにしたい
                is SlackMessageException -> UpdatePaidModel(false, "slackが送れないよ!")
                else -> throw e
            }
        }
        return UpdatePaidModel(true, "更新されたよ！")
    }
}

data class UpdatePaidModel(val noticeResult: Boolean, val message: String)