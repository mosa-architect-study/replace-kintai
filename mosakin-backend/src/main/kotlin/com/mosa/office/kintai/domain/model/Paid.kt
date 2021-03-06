package com.mosa.office.kintai.domain.model

import com.mosa.office.kintai.domain.shared.DomainAuthorizationException
import java.time.LocalDate

class Paid (
    val paidId : String,
    override var paidAcquisitionDate : LocalDate,
    override var paidTimeType : PaidTimeType,
    val paidAcquisitionUserId : String,
    val paidReason : String
)  : HasPaidTime(paidAcquisitionDate,paidTimeType) {
    fun canAccess(user: User):Boolean {
        return user.adminFlag == AdminFlg.ADMIN || user.userId == this.paidAcquisitionUserId
    }
}

class DuplicatedPaidException : Exception()

enum class PaidTimeType {
    ALL_DAY,AM,PM;
    internal fun isDuplicated (other:PaidTimeType): Boolean {
        return other == this || other == ALL_DAY || this == ALL_DAY;
    }
    companion object {
        fun of(str: String):PaidTimeType? {
            return values().find {
                it.toString() == str
            }
        }
    }
}




open class HasPaidTime internal constructor(
    open val paidAcquisitionDate : LocalDate,
    open val paidTimeType : PaidTimeType
) {
    private fun isDuplicated(other:HasPaidTime) : Boolean{
        return this.paidAcquisitionDate == other.paidAcquisitionDate
                && this.paidTimeType.isDuplicated(other.paidTimeType)
    }
    /**
     * otherに対して、日付として被っているかをチェックします。
     * @param other
     * @exception DuplicatedPaidException 被っている場合
     */
    fun assertNotDuplicated(other:HasPaidTime) {
        isDuplicated(other) && throw DuplicatedPaidException()
    }

}

interface PaidRepository {
    fun getAllByUserId(userId:String) : List<Paid>
    fun add(paid: Paid);
    fun update(paid: Paid);
    fun delete(paid: Paid);
    fun getAll() : List<Paid>;
    fun getById(paidId:String) : Paid?
}

