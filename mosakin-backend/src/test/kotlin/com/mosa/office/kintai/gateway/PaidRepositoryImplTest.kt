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

internal class PaidRepositoryImplTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun initDataSource () {
            val url = "jdbc:h2:mem:;MODE=PostgreSQL;INIT=RUNSCRIPT FROM './database/sql/01_ddl.sql'\\;RUNSCRIPT FROM 'classpath:com/mosa/office/kintai/gateway/insert.sql'"
            Database.connect(url,"org.h2.Driver");
        }

    }

    fun sampleData() {
        PaidTable.deleteAll()
        PaidTable.insert {
            it[id] = "hoge"
            it[userId] = "00000001"
            it[reason] = "頭痛い"
            it[timeType] = "AM"
            it[acquisitionDate] = LocalDate.of(2020,5,6)
        }
        PaidTable.insert {
            it[id] = "fuga"
            it[userId] = "00000002"
            it[reason] = "お腹痛い"
            it[timeType] = "ALL_DAY"
            it[acquisitionDate] = LocalDate.of(2020,5,6)
        }
    }


    @Test
    fun add() {
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
        val repository = PaidRepositoryImpl()
        transaction {
            sampleData()
            addLogger(StdOutSqlLogger)
            val count = repository.getAllByUserId("00000001").size
            assertThat(count).isEqualTo(1)
        }


    }

    @Test
    fun getAll() {
        val repository = PaidRepositoryImpl()
        transaction {
            sampleData()
            addLogger(StdOutSqlLogger)
            val count = repository.getAll().size
            assertThat(count).isEqualTo(2)
        }


    }


}