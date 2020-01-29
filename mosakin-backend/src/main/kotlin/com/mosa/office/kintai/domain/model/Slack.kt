package com.mosa.office.kintai.domain.model

data class Slack(
        val url : String
)
data class Text (
        var text: String?
)

class SlackMessageException : Exception()