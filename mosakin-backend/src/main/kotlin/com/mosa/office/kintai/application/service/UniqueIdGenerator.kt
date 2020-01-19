package com.mosa.office.kintai.application.service

import org.springframework.stereotype.Component
import java.util.*

/**
 * 採番ロジックを実装する
 */
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