package com.mosa.office.kintai

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.PropertySource

@SpringBootApplication
@PropertySource("classpath:/application-deploy.properties")
class KintaiApplication

fun main(args: Array<String>) {
	runApplication<KintaiApplication>(*args)
}


