package com.mosa.office.kintai.application.model

import com.mosa.office.kintai.domain.model.PaidTimeType
import java.time.LocalDate

data class SlackAddPaidInfo(
        val paidAcquisitionDate : LocalDate,
        val paidTimeType : PaidTimeType,
        val paidReason : String
)

data class SlackUpdatePaidInfo(
        val beforePaidAcquisitionDate : LocalDate,
        val paidAcquisitionDate : LocalDate,
        val beforePaidTimeType: PaidTimeType,
        val paidTimeType : PaidTimeType,
        val paidReason : String
)

class SlackMessageException : Exception()