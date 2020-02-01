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
    fun add(@RequestBody input:AddPaidInputDto): String {
        // TODO アクセスしてきたユーザー情報の取得 UseCaseでやるべきか？
        try {
            useCase.add(input)
        } catch(e:Exception) {
            println(e)
            return when(e){
                // TODO ここら辺はうまくException Handlerとかに逃がしたい
                is DuplicatedPaidException -> "君の登録しようとしてる有給は他の有給と日付が被っているよ！"
                is SlackMessageException -> "slackが送れないよ!"
                else -> throw e
            }
        }
        return "追加したよ！"
    }

}