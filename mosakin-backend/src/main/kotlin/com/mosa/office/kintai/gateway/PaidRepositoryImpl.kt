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
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Service
import java.time.LocalDate

// PaidListRepositoryの実装
@Service
class PaidRepositoryImpl : PaidRepository {
    override fun getAllByUserId(userId: String): List<Paid> {
        return transaction {
            val query = PaidTable.select {
                PaidTable.userId eq userId
            }
            query.map { convertToPaid(it) }
        }
    }

    override fun add(paid: Paid) {
        transaction {
            PaidTable.insert {
                it[PaidTable.userId] = paid.paidAcquisitionUserId
                it[PaidTable.comment] = paid.paidReason
                it[PaidTable.timeType] = toPaidTimeTypeDb[paid.paidTimeType] ?: throw Exception("予期せぬエラー")
                it[PaidTable.acquisitionDate] = javaLocalDateToJodaDateTime(paid.paidAcquisitionDate)
            }
        }
    }
}

// DBで持っているIntとPaidTimeTypeのマッピング
private val toPaidTimeType = mutableMapOf<Int,PaidTimeType>(
    0 to PaidTimeType.ALL_DAY,
    1 to PaidTimeType.AM,
    2 to PaidTimeType.PM
)

private val toPaidTimeTypeDb = mutableMapOf<PaidTimeType,Int>(
    PaidTimeType.ALL_DAY to 0,
    PaidTimeType.AM to 1,
    PaidTimeType.PM to 2
)




// Exposedで取得した行データをドメインモデルに詰め替えする。
private fun convertToPaid(it:ResultRow):Paid {
    return Paid(
        it[PaidTable.id].value.toString(),
        LocalDate.from(jodaLocalDateTimeToJavaTImeLocalDate(it[PaidTable.acquisitionDate])),
        toPaidTimeType[it[PaidTable.timeType]]  ?: throw Exception("不正なtimeTypeがDBから検出されました。"),
        it[PaidTable.userId],
        it[PaidTable.comment]
    )
}


