package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.application.usecase.AllUserPaidListSummaryListQuery
import com.mosa.office.kintai.application.usecase.AllUserPaidListSummaryListQueryResultItem
import com.mosa.office.kintai.domain.model.AdminFlg
import com.mosa.office.kintai.domain.model.PaidNumber
import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.model.UserAnnualPaid
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
                User(
                    it[UserTable.userName],
                    it[UserTable.id],
                    AdminFlg.of(it[RoleTable.roleName]) ?:
                    throw UserRepositoryImplException("不正なRoleName ${it[RoleTable.roleName]} がDBに登録されています。")
                ),
                UserAnnualPaid(
                    PaidNumber(it[UserAnnualPaidTable.paidAcquisitionDate]),
                    PaidNumber(it[UserAnnualPaidTable.carryForward])
                )
            )
        }
    }
}