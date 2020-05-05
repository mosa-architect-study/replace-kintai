package com.mosa.office.kintai.gateway

import org.assertj.core.api.Assertions.assertThat
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test

internal class UserAnnualPaidRepositoryImplTest {


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

        val repository = UserAnnualPaidRepositoryImpl()
        transaction {
            addLogger(StdOutSqlLogger)
            val res = repository.get("00000001",2020)!!
            assertThat(res.annualPaidNumber.value).isEqualTo(15.0)
            assertThat(res.carryForward.value).isEqualTo(1.0)
        }
    }


}