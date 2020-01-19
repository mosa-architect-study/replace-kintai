package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.application.transaction.TransactionBoundary
import org.springframework.stereotype.Component

@Component
class ExposedTransactionBoundary : TransactionBoundary {
    override fun <T> start(process: () -> T): T {
        return org.jetbrains.exposed.sql.transactions.transaction {
            process()
        }
    }
}