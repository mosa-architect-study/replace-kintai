package com.mosa.office.kintai.application.service

import org.springframework.stereotype.Component
import java.util.*

interface UniqueIdGenerator {
    fun generate():String
}

// どこにおけばいいかわからん
@Component
class UUIDUniqueIdGenerator : UniqueIdGenerator {
    override fun generate(): String {
        return UUID.randomUUID().toString();
    }

}