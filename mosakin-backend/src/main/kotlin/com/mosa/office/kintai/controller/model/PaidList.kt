package com.mosa.office.kintai.controller.model

import java.time.LocalDate

data class PaidListHeaderViewModel(
    val carryForward : Int,
    val annualPaidNumber : Int,
    val leftPaidNumber: Int,
    val currentPaidAcquisitionNumber: Int
)

data class PaidListItemViewModel(
    val paidId : String,
    val paidAcquisitionDate : LocalDate,
    val paidTimeType : String
)

data class PaidListViewModel(val header : PaidListHeaderViewModel,val list : List<PaidListItemViewModel>)