package com.mosa.office.kintai.util

import com.mosa.office.kintai.domain.model.PaidTimeType
import org.springframework.stereotype.Component
import java.time.DayOfWeek
import java.time.LocalDate

@Component
class MapperUtil {

    // 曜日文字列に変換
    fun timeZoneString(type: PaidTimeType): String? {
        return when (type) {
            PaidTimeType.ALL_DAY -> "全日"
            PaidTimeType.AM -> "午前"
            PaidTimeType.PM -> "午後"
        }
    }

    //	曜日情報の取得
    fun getWeek(day: LocalDate): String {
        return when (day.dayOfWeek) {
            DayOfWeek.SUNDAY -> "日"
            DayOfWeek.MONDAY -> "月"
            DayOfWeek.TUESDAY -> "火"
            DayOfWeek.WEDNESDAY -> "水"
            DayOfWeek.THURSDAY -> "木"
            DayOfWeek.FRIDAY -> "金"
            DayOfWeek.SATURDAY -> "土"
        }
    }
}