package com.mosa.office.kintai.domain.model

import com.mosa.office.kintai.domain.shared.ValueObject

class UserAnnualPaid(
    val annualPaidNumber:PaidNumber,
    val carryForward:PaidNumber
)

class PaidNumber(override val value: Double) :
    ValueObject<Double> {

    companion object {
        fun fromTimeTypes(timeTypes: List<PaidTimeType>):PaidNumber{
            fun timeTypeToDaysNumber(timeType:PaidTimeType)  : Double {
                return when(timeType) {
                    PaidTimeType.AM -> 0.5
                    PaidTimeType.PM -> 0.5
                    PaidTimeType.ALL_DAY -> 1.0
                }
            }
            return PaidNumber(timeTypes.fold(0.0) { prev, cur -> timeTypeToDaysNumber(cur) + prev })
        }
    }


}

infix fun PaidNumber.plus(other : PaidNumber): PaidNumber{
    return PaidNumber(other.value + value)
}

infix fun PaidNumber.minus(other : PaidNumber): PaidNumber{
    return PaidNumber(value - other.value)
}

interface UserAnnualPaidRepository {
    fun get(user:String,year:Int):UserAnnualPaid?
}




