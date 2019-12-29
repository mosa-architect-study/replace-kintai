package com.mosa.office.kintai.controller

import com.mosa.office.kintai.controller.model.PaidListHeaderViewModel
import com.mosa.office.kintai.controller.model.PaidListItemViewModel
import com.mosa.office.kintai.controller.model.PaidListViewModel
import com.mosa.office.kintai.model.PaidTimeType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate

@RestController
class PaidListController {

    @GetMapping("/list")
    fun getPaidList() : PaidListViewModel {
        val header = PaidListHeaderViewModel(
            8,
            13,
            8,
            5
        )
        val list = listOf<PaidListItemViewModel>(
            PaidListItemViewModel("00001", LocalDate.of(2019,9,9),PaidTimeType.ALL_DAY.toString()),
            PaidListItemViewModel("00002",LocalDate.of(2019,9,10),PaidTimeType.PM.toString())
        )
        return PaidListViewModel(header,list);
    }

}