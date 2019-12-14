package com.mosa.office.kintai.model

data class Paid (
    val paidId : PaidId,
    val paidAcquisitionDate : PaidAcquisitionDate,
    val paidTimeType : PaidTimeType,
    val paidAcquisitionUserId : UserId,
    val paidReason : PaidReason
)

enum class PaidTimeType {
    ALL_DAY,AM,PM
}

data class PaidId(val value:Int);

interface PaidAcquisitionDate {
    val date : Int;
    val month : Int;
    val year : Int
}

data class PaidReason(val value:String) ;


