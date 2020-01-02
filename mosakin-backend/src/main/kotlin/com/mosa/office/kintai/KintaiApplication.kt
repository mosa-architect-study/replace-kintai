package com.mosa.office.kintai

import org.jetbrains.exposed.sql.Database
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KintaiApplication

fun main(args: Array<String>) {
	runApplication<KintaiApplication>(*args)
}


