package com.mosa.office.kintai

import org.h2.jdbcx.JdbcDataSource
import org.jetbrains.exposed.sql.Database
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KintaiApplication

fun main(args: Array<String>) {
	connectExposedToDatabase()
	runApplication<KintaiApplication>(*args)
}

fun connectExposedToDatabase() {
	val ds = JdbcDataSource()
	val ddl1 = "classpath:sql/ddl.sql"
	val ddl2 = "classpath:sql/sampledata.sql"
	ds.setURL(
		"jdbc:h2:mem:;MODE=PostgreSQL;INIT=RUNSCRIPT FROM '$ddl1'\\;RUNSCRIPT FROM '$ddl2'"
	);
	Database.connect(ds);
}

