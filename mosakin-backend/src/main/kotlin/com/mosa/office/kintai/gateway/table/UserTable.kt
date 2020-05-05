package com.mosa.office.kintai.gateway.table

import org.jetbrains.exposed.sql.Table

object UserTable : Table("user_info")  {
    val id = varchar("user_id",255)
    val userName = varchar("user_name",255)
    val roleId = integer("role_id") references RoleTable.id
    override val primaryKey = PrimaryKey(id)
}