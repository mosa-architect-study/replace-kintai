package com.mosa.office.kintai.gateway.mocks

import com.mosa.office.kintai.domain.model.PaidNumber
import com.mosa.office.kintai.domain.model.User
import com.mosa.office.kintai.domain.model.UserAnnualPaid
import com.mosa.office.kintai.domain.model.UserAnnualPaidRepository
import org.springframework.stereotype.Component

@Component
class MockUserAnnualPaidRepository : UserAnnualPaidRepository {

    override fun get(user:String,year: Number): UserAnnualPaid {
        return UserAnnualPaid(PaidNumber(13.0),PaidNumber(0.0))
    }
}
