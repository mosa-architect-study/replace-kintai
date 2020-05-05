package com.mosa.office.kintai.gateway.table

import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.`java-time`.date

object PaidTable : Table("paid_info") {
    val id = PaidTable.varchar("paid_id",255)
    val userId = PaidTable.varchar("user_id", 255);
    val acquisitionDate = PaidTable.date("paid_acquisition_date");
    val timeType = PaidTable.varchar ("paid_time_type",8)
    val reason = PaidTable.varchar("paid_reason", 255);
    override val primaryKey = PrimaryKey(id)
}