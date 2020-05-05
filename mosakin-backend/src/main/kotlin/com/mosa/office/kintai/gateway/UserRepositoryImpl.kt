package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.AdminFlg
import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.model.UserRepository
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
            }.elementAtOrNull(0)
        // flatMap的な書き方がしたい
        if(res != null){
            return User(
                res[UserTable.userName],
                res[UserTable.id],
                AdminFlg.of(res[RoleTable.roleName]) ?:
                throw UserRepositoryImplException("不正なRoleName ${res[RoleTable.roleName]} がDBに登録されています。")
            )
        }
        return null;
    }
}

class UserRepositoryImplException(msg:String) : Exception(msg)



