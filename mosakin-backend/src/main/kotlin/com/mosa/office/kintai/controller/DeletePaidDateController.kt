package com.mosa.office.kintai.controller

import com.mosa.office.kintai.controller.model.DeletePaidResultModal
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DeletePaidDateController {

    @GetMapping("/delete")
    fun delete() :DeletePaidResultModal {
        val success: Boolean = true
        val message: String = "君の指定した有給取得日はきちんと削除されたよ★ミ"
        return DeletePaidResultModal(success, message)
    }
}