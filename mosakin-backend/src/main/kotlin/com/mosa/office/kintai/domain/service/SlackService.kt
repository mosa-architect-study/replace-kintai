package com.mosa.office.kintai.domain.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.mosa.office.kintai.config.SlackConfig
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.http.RequestEntity
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import java.io.InputStream
import java.net.URI
import com.mosa.office.kintai.domain.model.Slack
import com.mosa.office.kintai.domain.model.Text
import com.mosa.office.kintai.domain.model.SlackMessageException

@Service
class SlackService(
) {
    @Autowired
    lateinit var slackConfig: SlackConfig

    fun postSlackMessage(message: String?) {
        val text: Text = Text(message);
        val mapper = jacksonObjectMapper()
        val jsonData: InputStream = slackConfig.slack() ?: return throw SlackMessageException()
        println(jsonData)
        val data = mapper.readValue<Slack>(jsonData)
        val request: RequestEntity<Text> = RequestEntity.post(URI(data.url)).accept(MediaType.APPLICATION_JSON).body(text);
        val restTemplate = RestTemplate()
        restTemplate.exchange(request, String::class.java)
    }
}