package com.mosa.office.kintai.gateway.table

import org.jetbrains.exposed.sql.Table

object RoleTable : Table("role_info")  {
    val id = integer("role_id")
    val roleName = varchar("role_name",255)
    override val primaryKey = PrimaryKey(id)
}