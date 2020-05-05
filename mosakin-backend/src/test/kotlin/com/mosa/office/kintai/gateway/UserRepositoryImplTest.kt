package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.AdminFlg
import org.assertj.core.api.Assertions.assertThat
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test

internal class UserRepositoryImplTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun initDataSource () {
            val url = "jdbc:h2:mem:;MODE=PostgreSQL;INIT=RUNSCRIPT FROM './database/sql/01_ddl.sql'\\;RUNSCRIPT FROM 'classpath:com/mosa/office/kintai/gateway/insert.sql'"
            Database.connect(url,"org.h2.Driver");
        }
    }

    @Test
    fun select() {
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
