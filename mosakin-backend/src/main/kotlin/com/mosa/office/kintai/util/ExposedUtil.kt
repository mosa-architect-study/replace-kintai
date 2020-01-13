package com.mosa.office.kintai.util

import org.joda.time.DateTime
import java.time.LocalDate

fun jodaLocalDateTimeToJavaTImeLocalDate(joda:DateTime): LocalDate {
    return LocalDate.of(
        joda.year,
        joda.monthOfYear,
        joda.dayOfMonth
    )
}

fun javaLocalDateToJodaDateTime(localDate:LocalDate): DateTime {
    return DateTime(
        localDate.year,
        localDate.month.value,
        localDate.dayOfMonth,
        0,
        0
    )
}
