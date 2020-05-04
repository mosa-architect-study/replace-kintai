package com.mosa.office.kintai.gateway.mocks

import com.mosa.office.kintai.domain.model.AdminFlg
import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.model.UserRepository
import org.springframework.stereotype.Component

@Component
class MockUserRepository : UserRepository {
    override fun getUser(id: String): User {
        return User(
            id.replaceAfter("@","").replace("@","") ,
            id,
            if(id.endsWith("@gmail.com")) AdminFlg.COMMON else AdminFlg.ADMIN)
    }
}