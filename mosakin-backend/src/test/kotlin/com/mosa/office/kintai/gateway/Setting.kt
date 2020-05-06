package com.mosa.office.kintai.gateway

import org.jetbrains.exposed.sql.Database

const val H2_CONNECTING_BASE = "jdbc:h2:mem:;MODE=PostgreSQL;INIT="

fun joinH2ConnectingURL(vararg filenames: String):String {
    return H2_CONNECTING_BASE +
            mutableListOf(
                "./database/sql/01_ddl.sql",
                "./database/sql/02_masterdata.sql"
            ).plus(filenames).joinToString("'\\;RUNSCRIPT FROM '","RUNSCRIPT FROM '","'")
}

fun initH2DataSource(vararg filenames: String) {
    val url = joinH2ConnectingURL(*filenames)
    Database.connect(url,"org.h2.Driver")
}