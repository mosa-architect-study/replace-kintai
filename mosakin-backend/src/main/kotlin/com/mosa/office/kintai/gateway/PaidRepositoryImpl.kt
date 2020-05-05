package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidRepository
import com.mosa.office.kintai.domain.model.PaidTimeType
import com.mosa.office.kintai.gateway.table.PaidTable
import com.mosa.office.kintai.util.javaLocalDateToJodaDateTime
import com.mosa.office.kintai.util.jodaLocalDateTimeToJavaTImeLocalDate
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.springframework.stereotype.Service
import java.time.LocalDate

// PaidListRepositoryの実装
@Service
class PaidRepositoryImpl : PaidRepository {
    override fun getAllByUserId(userId: String): List<Paid> {

        val query = PaidTable.select {
            PaidTable.userId eq userId
        }
        return query.map { convertToPaid(it) }

    }

    override fun add(paid: Paid) {

        PaidTable.insert {
            it[PaidTable.id] = paid.paidId
            it[PaidTable.userId] = paid.paidAcquisitionUserId
            it[PaidTable.reason] = paid.paidReason
            it[PaidTable.timeType] = paid.paidTimeType.toString()
            it[PaidTable.acquisitionDate] = paid.paidAcquisitionDate
        }

    }
}

// Exposedで取得した行データをドメインモデルに詰め替えする。
private fun convertToPaid(it:ResultRow):Paid {
    return Paid(
        it[PaidTable.id].toString(),
        LocalDate.from(it[PaidTable.acquisitionDate]),
        PaidTimeType.of(it[PaidTable.timeType]) ?: throw PaidRepositoryImplException("不正なPaidTimeType ${it[PaidTable.timeType]} がDBに登録されています。"),
        it[PaidTable.userId],
        it[PaidTable.reason]
    )
}

class PaidRepositoryImplException(msg:String) : Exception(msg)


