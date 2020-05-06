package com.mosa.office.kintai.gateway

import org.assertj.core.api.Assertions.assertThat
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.Test

internal class UserAnnualPaidRepositoryImplTest {

    @Test
    fun select() {
        initH2DataSource(
            "classpath:com/mosa/office/kintai/gateway/testdata_user.sql",
            "classpath:com/mosa/office/kintai/gateway/testdata_annual_paid_number.sql"
        )
        val repository = UserAnnualPaidRepositoryImpl()
        transaction {
            addLogger(StdOutSqlLogger)
            val res = repository.get("00000001",2020)!!
            assertThat(res.annualPaidNumber.value).isEqualTo(15.0)
            assertThat(res.carryForward.value).isEqualTo(1.0)
        }
    }


}