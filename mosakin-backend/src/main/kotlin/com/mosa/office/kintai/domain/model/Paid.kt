package com.mosa.office.kintai.domain.model

import java.time.LocalDate

class Paid (
    val paidId : String,
    val paidAcquisitionDate : LocalDate,
    val paidTimeType : PaidTimeType,
    val paidAcquisitionUserId : String,
    val paidReason : String
)


enum class PaidTimeType {
    ALL_DAY,AM,PM
}

interface PaidListRepository {
    fun getAllByUserId(userId:String) : List<Paid>
    fun add(paid: Paid);
}

