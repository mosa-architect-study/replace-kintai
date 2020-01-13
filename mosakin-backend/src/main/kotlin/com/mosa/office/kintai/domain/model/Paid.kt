package com.mosa.office.kintai.domain.model

import java.time.LocalDate

class Paid (
    val paidId : String,
    override val paidAcquisitionDate : LocalDate,
    override val paidTimeType : PaidTimeType,
    val paidAcquisitionUserId : String,
    val paidReason : String
)  : HasPaidTime(paidAcquisitionDate,paidTimeType)

class DuplicatedPaidException : Exception()

enum class PaidTimeType {
    ALL_DAY,AM,PM;
    internal fun isDuplicated (other:PaidTimeType): Boolean {
        return other == this || other == ALL_DAY || this == ALL_DAY;
    }
}

open class HasPaidTime internal constructor(
    open val paidAcquisitionDate : LocalDate,
    open val paidTimeType : PaidTimeType
) {
    fun assertNotDuplicated(list: List<HasPaidTime>) {
        val sameDate = list.filter {
            it.paidAcquisitionDate == this.paidAcquisitionDate &&
            !it.paidTimeType.isDuplicated(this.paidTimeType)
        }
        sameDate.isNotEmpty() && throw DuplicatedPaidException();
    }
}

interface PaidRepository {
    fun getAllByUserId(userId:String) : List<Paid>
    fun add(paid: Paid);
}

