package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidTimeType
import com.mosa.office.kintai.gateway.table.PaidTable
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import java.time.LocalDate
import org.assertj.core.api.Assertions.assertThat
import org.jetbrains.exposed.sql.*
import org.junit.jupiter.api.BeforeEach

internal class PaidRepositoryImplTest {

    @Test
    fun add() {
        initH2DataSource(
            "classpath:com/mosa/office/kintai/gateway/testdata_user.sql"
        )
        val repository = PaidRepositoryImpl()
        transaction {
            PaidTable.deleteAll()
            addLogger(StdOutSqlLogger)
            // データを追加
            repository.add(Paid(
                "hoge",
                LocalDate.of(2019,10,10),
                PaidTimeType.ALL_DAY,
                "00000001",
                "お腹が痛い"
            ))
            val count = PaidTable.selectAll().toList().size
            assertThat(count).isEqualTo(1)
        }
    }

    @Test
    fun getAllByUserId() {
        initH2DataSource(
            "classpath:com/mosa/office/kintai/gateway/testdata_user.sql",
            "classpath:com/mosa/office/kintai/gateway/testdata_paid.sql"
        )
        val repository = PaidRepositoryImpl()
        transaction {
            addLogger(StdOutSqlLogger)
            val count = repository.getAllByUserId("00000001").size
            assertThat(count).isEqualTo(1)
        }


    }

    @Test
    fun getAll() {
        initH2DataSource(
            "classpath:com/mosa/office/kintai/gateway/testdata_user.sql",
            "classpath:com/mosa/office/kintai/gateway/testdata_paid.sql"
        )
        val repository = PaidRepositoryImpl()
        transaction {
            addLogger(StdOutSqlLogger)
            val count = repository.getAll().size
            assertThat(count).isEqualTo(2)
        }


    }

    @Test
    fun update() {
        initH2DataSource(
                "classpath:com/mosa/office/kintai/gateway/testdata_user.sql",
                "classpath:com/mosa/office/kintai/gateway/testdata_paid.sql"
        )
        val repository = PaidRepositoryImpl()
        transaction {
            addLogger(StdOutSqlLogger)
            repository.update(
                    Paid(
                            "hoge",
                            LocalDate.of(2020,5,6),
                            PaidTimeType.ALL_DAY,
                            "00000001",
                            "腹痛がひどすぎるため全休"
                    )
            )
            val res = PaidTable.select { PaidTable.id eq "hoge" }.first()
            assertThat(res[PaidTable.timeType]).isEqualTo("ALL_DAY")
            assertThat(res[PaidTable.reason]).isEqualTo("腹痛がひどすぎるため全休")
        }


    }

    @Test
    fun delete() {
        initH2DataSource(
                "classpath:com/mosa/office/kintai/gateway/testdata_user.sql",
                "classpath:com/mosa/office/kintai/gateway/testdata_paid.sql"
        )
        val repository = PaidRepositoryImpl()
        transaction {
            addLogger(StdOutSqlLogger)
            repository.delete("hoge")
            val res = PaidTable.select { PaidTable.id eq "hoge" }
            assertThat(res.count()).isEqualTo(0)
        }


    }


}