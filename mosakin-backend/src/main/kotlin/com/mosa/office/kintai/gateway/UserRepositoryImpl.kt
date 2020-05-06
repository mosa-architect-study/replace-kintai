package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.model.UserRepository
import com.mosa.office.kintai.gateway.mapper.mapToUser
import com.mosa.office.kintai.gateway.table.RoleTable
import com.mosa.office.kintai.gateway.table.UserTable
import org.jetbrains.exposed.sql.select
import org.springframework.stereotype.Component

@Component
class UserRepositoryImpl : UserRepository {
    override fun getUser(id: String): User? {
        val res = UserTable
            .leftJoin(
                RoleTable
            )
            .slice(UserTable.id,UserTable.userName, RoleTable.roleName)
            .select {
                UserTable.id eq id
            }.firstOrNull()
        return res?.let { mapToUser(it)}
    }
}


