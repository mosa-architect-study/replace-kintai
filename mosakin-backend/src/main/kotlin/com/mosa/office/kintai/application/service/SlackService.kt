package com.mosa.office.kintai.application.service

import com.mosa.office.kintai.application.model.SlackAddPaidInfo
import com.mosa.office.kintai.config.SlackConfig
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.http.RequestEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import java.net.URI
import com.mosa.office.kintai.application.model.SlackMessageProperty
import com.mosa.office.kintai.application.model.SlackMessageException
import org.springframework.http.HttpStatus

@Service
class SlackService(
) {
    @Autowired
    lateinit var slackConfig: SlackConfig

    fun postAddSlackMessage(input: SlackAddPaidInfo) {
        val text: SlackMessageProperty = SlackMessageProperty(" \n新規： *" + "ユーザー名" + "*\n日時： *" + input.paidAcquisitionDate + " (" +  ")" + "  [" + input.paidTimeType + "]*\n```\n" + input.paidReason + "```");
        val jsonData:String = slackConfig.getSlackMessageUrl() ?: return throw SlackMessageException()
        val request: RequestEntity<SlackMessageProperty> = RequestEntity.post(URI(jsonData)).accept(MediaType.APPLICATION_JSON).body(text);
        val restTemplate = RestTemplate()
        val res = restTemplate.exchange(request, String::class.java)
        if (res.statusCode != HttpStatus.OK) {
            return throw SlackMessageException()
        }
    }
}