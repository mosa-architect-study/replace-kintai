package com.mosa.office.kintai.application.transaction

import org.springframework.beans.factory.getBean
import org.springframework.context.ApplicationContext
import org.springframework.beans.BeansException
import org.springframework.context.ApplicationContextAware
import org.springframework.stereotype.Component

fun <T> transaction(process:() -> T):T {
    return TransactionBoundaryProvider.getTransactionBoundary().transaction(process)
}

interface TransactionBoundary {
    fun <T> transaction(process:() -> T):T
}

@Component
class TransactionBoundaryProvider : ApplicationContextAware {

    @Throws(BeansException::class)
    override fun setApplicationContext(context: ApplicationContext) {
        boundary = context.getBean(TransactionBoundary::class.java)
    }

    companion object {
        private var boundary: TransactionBoundary? = null

        fun getTransactionBoundary(): TransactionBoundary {
            return boundary ?: throw Exception();
        }
    }
}

