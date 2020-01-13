package com.mosa.office.kintai.gateway.table

import org.jetbrains.exposed.dao.IntIdTable

object PaidTable : IntIdTable("t_paid","paid_id") {
    val userId = PaidTable.varchar("user_id", 255);
    val acquisitionDate = PaidTable.date("acquisition_date");
    val timeType = PaidTable.integer("time_type")
    val comment = PaidTable.varchar("comment", 255);
}