package com.mosa.office.kintai.repository

import com.mosa.office.kintai.model.Paid
import com.mosa.office.kintai.model.PaidTimeType
import com.mosa.office.kintai.usecase.PaidListRepository
import com.mosa.office.kintai.util.jodaLocalDateTimeToJavaTImeLocalDate
import org.jetbrains.exposed.dao.IntIdTable
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Service
import java.time.LocalDate

private object PaidTable : IntIdTable("t_paid","paid_id") {
    val userId = varchar("user_id",255);
    val acquisitionDate = date("acquisition_date");
    val timeType = integer("time_type")
    val comment = varchar("comment",255);
}

// PaidListRepositoryの実装
@Service
class PaidListRepositoryImpl : PaidListRepository {
    override fun getAll(userId: String): List<Paid> {
        return transaction {
            val query = PaidTable.select {
                PaidTable.userId eq userId
            }
            query.map { convertToPaid(it) }
        }
    }
}

// DBで持っているIntとPaidTimeTypeのマッピング
private val toPaidTimeType = mutableMapOf(
    0 to PaidTimeType.ALL_DAY,
    1 to PaidTimeType.AM,
    2 to PaidTimeType.PM
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


