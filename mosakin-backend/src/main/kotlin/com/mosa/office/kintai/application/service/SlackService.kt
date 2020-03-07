package com.mosa.office.kintai.application.service

import com.mosa.office.kintai.application.model.SlackAddPaidInfo
import com.mosa.office.kintai.application.model.SlackUpdatePaidInfo
import com.mosa.office.kintai.application.model.SlackMessageException
import com.mosa.office.kintai.config.SlackConfig
import com.mosa.office.kintai.domain.model.PaidTimeType
import org.slf4j.Logger
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.RequestEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import java.net.URI
import java.time.DayOfWeek
import java.time.LocalDate

@Service
class SlackService(
    private val slackConfig: SlackConfig,
    private val logger: Logger
)
{

    // TODO 送る文字列の作成
    fun postAddSlackMessage(input: SlackAddPaidInfo) {
        val text = SlackMessageProperty(" \n新規： *" + "ユーザー名" + "*\n日時： *" + input.paidAcquisitionDate + " (" + getWeek(input.paidAcquisitionDate) + ")" + "  [" + timeZoneString(input.paidTimeType) + "]*\n```\n" + input.paidReason + "```");
        postMessage(text)
    }

    // TODO 送る文字列の作成
    fun postUpdateSlackMessage(input: SlackUpdatePaidInfo) {
        val text = SlackMessageProperty(" \n更新： *" + "ユーザー名" + "*\n更新前日時： *" + input.beforePaidAcquisitionDate + " (" + getWeek(input.paidAcquisitionDate) + ")" + "  [" + timeZoneString(input.beforePaidTimeType) + "]*\n更新後日時： *" + input.paidAcquisitionDate + " (" + getWeek(input.paidAcquisitionDate) + ")" + "  [" + timeZoneString(input.paidTimeType) + "]*\n```\n" + input.paidReason + "```");
        postMessage(text)
    }

    private fun postMessage(requestBody:SlackMessageProperty) {
        val jsonData:String = slackConfig.getSlackMessageUrl() ?: return throw SlackMessageException()
        val request: RequestEntity<SlackMessageProperty> = RequestEntity.post(URI(jsonData)).accept(MediaType.APPLICATION_JSON).body(requestBody);
        val restTemplate = RestTemplate()
        val res = try {
            restTemplate.exchange(request, String::class.java)
        } catch (e:Exception) {
            logger.error(e.message)
            throw SlackMessageException()
        }
        if (res.statusCode != HttpStatus.OK) {
            logger.error("Sending message to slack failed with status code ${res.statusCode}")
            throw SlackMessageException()
        }
    }

}


private data class SlackMessageProperty (
    val text: String
)

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