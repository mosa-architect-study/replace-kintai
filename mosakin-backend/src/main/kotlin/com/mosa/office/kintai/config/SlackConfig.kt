package com.mosa.office.kintai.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import java.io.InputStream

const val SLACK_MESSAGE_WEBHOOK_URL_TEST = "SLACK_MESSAGE_WEBHOOK_URL_TEST"
const val SLACK_MESSAGE_WEBHOOK_URL = "SLACK_MESSAGE_WEBHOOK_URL"

@Configuration
class SlackConfig(
        @Value("\${secret.$SLACK_MESSAGE_WEBHOOK_URL:#{null}}") private  val urlStr: String?,
        @Value("\${secret.$SLACK_MESSAGE_WEBHOOK_URL_TEST:#{null}}") private  val testUrlStr: String?,
        @Value("secret/$SLACK_MESSAGE_WEBHOOK_URL_TEST.json") private val testClassPath : ClassPathResource
) {


    @Bean
    fun slack (
    ) : InputStream? {
        return if(false) urlStr?.byteInputStream() else testUrlStr?.byteInputStream() ?: // HEROKUからは環境変数でJSONが渡ってくるはず。。
        if(testClassPath.exists()) testClassPath.inputStream else
            return null
    }
}



