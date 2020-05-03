package com.mosa.office.kintai.controller

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DeletePaidController {

    @PostMapping("/delete")
    fun delete() :DeletePaidMessage {
        return DeletePaidMessage.SUCCESS
    }

}

enum class DeletePaidMessage{
    SUCCESS,NOTIFICATION_FAILED
}
