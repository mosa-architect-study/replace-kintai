package com.mosa.office.kintai.controller

import com.mosa.office.kintai.controller.model.DeletePaidModel
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DeletePaidController {

    @PostMapping("/delete")
    fun delete() :DeletePaidModel {
        val success: Boolean = true
        val message: String = "君の指定した有給取得日はきちんと削除されたよ★ミ"
        return DeletePaidModel(success, message)
    }
}