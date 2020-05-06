package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.UserAnnualPaid
import com.mosa.office.kintai.domain.model.UserAnnualPaidRepository
import com.mosa.office.kintai.gateway.mapper.mapToUserAnnualPaid
import com.mosa.office.kintai.gateway.table.UserAnnualPaidTable
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.select
import org.springframework.stereotype.Component

@Component
class UserAnnualPaidRepositoryImpl : UserAnnualPaidRepository {
    override fun get(user: String, year: Int): UserAnnualPaid? {
        val rows = UserAnnualPaidTable.select {
            (UserAnnualPaidTable.userId eq user) and
                    (UserAnnualPaidTable.fiscalYear eq year)
        }
        return rows.firstOrNull()?.let { mapToUserAnnualPaid(it) }
    }
}