package com.mosa.office.kintai.model

import java.time.LocalDate

data class Paid (
    val paidId : String,
    val paidAcquisitionDate : LocalDate,
    val paidTimeType : PaidTimeType,
    val paidAcquisitionUserId : String,
    val paidReason : String
)

enum class PaidTimeType {
    ALL_DAY,AM,PM
}

