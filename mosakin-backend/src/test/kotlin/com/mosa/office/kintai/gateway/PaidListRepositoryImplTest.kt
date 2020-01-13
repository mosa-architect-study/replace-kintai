package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidTimeType
import com.mosa.office.kintai.gateway.table.PaidTable
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import java.time.LocalDate
import org.assertj.core.api.Assertions.assertThat

internal class PaidListRepositoryImplTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun initDataSource () {
            val url = "jdbc:h2:mem:;MODE=PostgreSQL;INIT=RUNSCRIPT FROM './database/sql/01_ddl.sql'\\;RUNSCRIPT FROM 'classpath:com/mosa/office/kintai/gateway/insert.sql'"
            Database.connect(url,"org.h2.Driver");
        }
    }

    @Test
    fun add() {
        val repository = PaidListRepositoryImpl()
        transaction {
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

}