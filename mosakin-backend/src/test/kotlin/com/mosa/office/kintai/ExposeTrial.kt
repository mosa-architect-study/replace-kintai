package com.mosa.office.kintai

import org.assertj.core.api.Assertions.assertThat
import org.h2.jdbcx.JdbcDataSource
import org.h2.tools.RunScript
import org.jetbrains.exposed.dao.IntIdTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.junit.jupiter.api.Test
import java.io.InputStreamReader

object Users: IntIdTable("user_info","user_id") {
    val name = varchar("user_name", 50)
}

data class User(val id : Int,val name : String)

class ExposeTrial {

    @Test
    fun trial1() {
        val ds = JdbcDataSource()
        ds.setURL("jdbc:h2:mem:;MODE=MYSQL;INIT=RUNSCRIPT FROM 'classpath:sql/sample.sql'");
        ds.user = "sa";
        ds.password = "sa";
        Database.connect(ds);
        transaction {
            addLogger(StdOutSqlLogger)
            val name = Users.insert {
                it[name] = "ほげ太郎"
            } get Users.name
            assertThat(name).isEqualTo("ほげ太郎");
            val users = Users.selectAll().map{
                User(it[Users.id].value,it[Users.name])
            }
            assertThat(users)
                .containsAll(listOf(User(1,"ほげ太郎")))
        }
    }

}