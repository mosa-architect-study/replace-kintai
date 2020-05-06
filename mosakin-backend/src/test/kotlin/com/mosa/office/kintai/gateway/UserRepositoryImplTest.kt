package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.AdminFlg
import org.assertj.core.api.Assertions.assertThat
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.Test

internal class UserRepositoryImplTest {

    @Test
    fun select() {
        initH2DataSource(
            "classpath:com/mosa/office/kintai/gateway/testdata_user.sql"
        )
        val repository = UserRepositoryImpl();
        transaction {
            addLogger(StdOutSqlLogger)
            val user = repository.getUser("00000001")!!
            assertThat(user.userId).isEqualTo("00000001")
            assertThat(user.adminFlag).isEqualTo(AdminFlg.COMMON)
            assertThat(user.userName).isEqualTo("猛者彰人")
        }

    }
}
