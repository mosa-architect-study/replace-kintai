package com.mosa.office.kintai.application.transaction

interface TransactionBoundary {
    fun <T> start(process:() -> T):T
}



