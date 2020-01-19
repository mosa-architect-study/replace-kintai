package com.mosa.office.kintai.controller

import com.mosa.office.kintai.application.usecase.AddPaidInputDto
import com.mosa.office.kintai.application.usecase.AddPaidUseCase
import com.mosa.office.kintai.domain.model.AdminFlg
import com.mosa.office.kintai.domain.model.DuplicatedPaidException
import com.mosa.office.kintai.domain.model.User
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class AddPaidController(private val useCase: AddPaidUseCase) {

    @PostMapping("/add")
    fun add(@RequestBody input:AddPaidInputDto): String {
        // TODO アクセスしてきたユーザー情報の取得 UseCaseでやるべきか？
        try {
            useCase.add(input,User("猛者彰人","00000001",AdminFlg.COMMON))
        } catch(e:DuplicatedPaidException) {
            // TODO ここら辺はうまくException Handlerとかに逃がしたい
            return "君の登録しようとしてる有給は他の有給と日付が被っているよ！"
        }
        return "追加したよ！"
    }

}