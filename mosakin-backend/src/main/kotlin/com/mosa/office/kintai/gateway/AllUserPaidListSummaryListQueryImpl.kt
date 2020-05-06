package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.application.usecase.AllUserPaidListSummaryListQuery
import com.mosa.office.kintai.application.usecase.AllUserPaidListSummaryListQueryResultItem
import com.mosa.office.kintai.gateway.mapper.mapToUser
import com.mosa.office.kintai.gateway.mapper.mapToUserAnnualPaid
import com.mosa.office.kintai.gateway.table.RoleTable
import com.mosa.office.kintai.gateway.table.UserAnnualPaidTable
import com.mosa.office.kintai.gateway.table.UserTable
import org.jetbrains.exposed.sql.select
import org.springframework.stereotype.Component

@Component
class AllUserPaidListSummaryListQueryImpl : AllUserPaidListSummaryListQuery{
    override fun get(year: Int): List<AllUserPaidListSummaryListQueryResultItem> {
        val rows = UserTable
            .leftJoin(UserAnnualPaidTable)
            .leftJoin(RoleTable)
            .select{
                UserAnnualPaidTable.fiscalYear eq year
            }
        return rows.map {
            AllUserPaidListSummaryListQueryResultItem(
                mapToUser(it),
                mapToUserAnnualPaid(it)
            )
        }
    }
}