package com.mosa.office.kintai.model

import java.time.LocalDateTime

data class Paid (
    val paidAcquisitionDate : PaidAcquisitionDate,
    val paidTimeType : PaidTimeType,
    val paidAcquisitionUserId : UserId,
    val paidReason : PaidReason
)

enum class PaidTimeType {
    ALL_DAY,AM,PM
}

class PaidAcquisitionDate(datetime: LocalDateTime) {
    private val datetime = datetime;
    val date : Int
        get() = datetime.dayOfMonth
    val month : Int
        get() = datetime.month.value;
    val year : Int
        get() = datetime.year;
}

data class PaidReason(val value:String) ;


