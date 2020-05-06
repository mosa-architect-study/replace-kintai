package com.mosa.office.kintai.gateway

import org.assertj.core.api.Assertions.assertThat
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test

class AllUserPaidListSummaryListQueryImplTest {

    @Test
    fun get() {
        initH2DataSource(
            "classpath:com/mosa/office/kintai/gateway/testdata_user.sql",
            "classpath:com/mosa/office/kintai/gateway/testdata_annual_paid_number.sql"
        )
        val repository = AllUserPaidListSummaryListQueryImpl()
        transaction {
            addLogger(StdOutSqlLogger)
            val res1 = repository.get(2020)
            assertThat(res1.size).isEqualTo(2)
            val res2 = repository.get(2019)
            assertThat(res2.size).isEqualTo(1)
        }
    }
}