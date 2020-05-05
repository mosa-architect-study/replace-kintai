package com.mosa.office.kintai.gateway.table

import org.jetbrains.exposed.sql.Table

object UserAnnualPaidTable : Table("annual_paid_number") {
    val userId = varchar("user_id",255).references(UserTable.id)
    val fiscalYear = integer("fiscal_year")
    val paidAcquisitionDate = double("paid_acquisition_date")
    val carryForward = double("carry_forward")
}