package com.mosa.office.kintai.application.model

data class Slack (
        var text: String?
)

class SlackMessageException : Exception()