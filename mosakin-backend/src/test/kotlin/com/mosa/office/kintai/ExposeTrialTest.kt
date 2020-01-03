package com.mosa.office.kintai

import org.assertj.core.api.Assertions.assertThat
import org.h2.jdbcx.JdbcDataSource
import org.jetbrains.exposed.dao.IntIdTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test

object Users: IntIdTable("user_info","user_id") {
    val name = varchar("user_name", 50)
}

data class User(val id : Int,val name : String)

class ExposeTrialTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun initDataSource () {
            val url = "jdbc:h2:mem:;MODE=MYSQL;INIT=RUNSCRIPT FROM 'classpath:sql/sample.sql'"
            Database.connect(url,"org.h2.Driver");
        }
    }

    @Test
    fun trial1() {
        transaction {
            addLogger(StdOutSqlLogger)
            // データを追加
            val name = Users.insert {
                it[name] = "ほげ太郎"
            } get Users.name
            assertThat(name).isEqualTo("ほげ太郎");
            // データを取得
            val users = Users.selectAll().map {
                // 結果をオブジェクトに詰め替え
                User(it[Users.id].value, it[Users.name])
            }
            assertThat(users)
                .containsAll(listOf(User(1, "ほげ太郎")))
        }
    }

}