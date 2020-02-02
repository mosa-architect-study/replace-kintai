package com.mosa.office.kintai.config

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.PropertySource
import org.springframework.core.env.Environment

const val SLACK_MESSAGE_WEBHOOK_URL_TEST = "SLACK_MESSAGE_WEBHOOK_URL_TEST" // テスト用
@Configuration
@PropertySource("classpath:secret/$SLACK_MESSAGE_WEBHOOK_URL_TEST.properties")
class SlackConfig(
        @Value("\${secret.$SLACK_MESSAGE_WEBHOOK_URL_TEST:#{null}}") private  val testUrlStr: String?
) {
    @Autowired
    private val environment: Environment? = null

    @Bean
    fun slackMessage (
    ) : String? {
        return testUrlStr ?: // HEROKUからは環境変数でJSONが渡ってくるはず。。
        (environment?.getProperty("url") ?: return "")
    }
}



