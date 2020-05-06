package com.mosa.office.kintai.gateway.mapper

import com.mosa.office.kintai.domain.model.*
import com.mosa.office.kintai.gateway.table.PaidTable
import com.mosa.office.kintai.gateway.table.RoleTable
import com.mosa.office.kintai.gateway.table.UserAnnualPaidTable
import com.mosa.office.kintai.gateway.table.UserTable
import org.jetbrains.exposed.sql.ResultRow
import java.time.LocalDate

fun mapToUser(row: ResultRow) : User {
    return User(
        row[UserTable.userName],
        row[UserTable.id],
        AdminFlg.of(row[RoleTable.roleName]) ?:
        throw ResultRowMappingException("Role Name",row[RoleTable.roleName])
    )
}

fun mapToUserAnnualPaid(row: ResultRow) : UserAnnualPaid {
    return UserAnnualPaid(
        PaidNumber(row[UserAnnualPaidTable.paidAcquisitionDate]),
        PaidNumber(row[UserAnnualPaidTable.carryForward])
    )
}

fun mapToPaid(it:ResultRow): Paid {
    return Paid(
        it[PaidTable.id].toString(),
        LocalDate.from(it[PaidTable.acquisitionDate]),
        PaidTimeType.of(it[PaidTable.timeType]) ?: throw ResultRowMappingException("PaidTimeType", it[PaidTable.timeType]),
        it[PaidTable.userId],
        it[PaidTable.reason]
    )
}

internal class ResultRowMappingException(clmName : String, invalidValue: Any) : Exception("DBデータのマッピングに失敗しました。 不正な${clmName}:${invalidValue}が登録されています")
