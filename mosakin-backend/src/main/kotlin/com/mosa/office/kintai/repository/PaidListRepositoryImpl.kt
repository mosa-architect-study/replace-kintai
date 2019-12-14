package com.mosa.office.kintai.repository

import com.mosa.office.kintai.model.*
import com.mosa.office.kintai.usecase.PaidListRepository
import org.jetbrains.exposed.dao.IntIdTable
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.joda.time.LocalDateTime
import org.springframework.stereotype.Service
import java.lang.Exception

private object PaidTable : IntIdTable("t_paid","paid_id") {
    val userId = varchar("user_id",255);
    val acquisitionDate = date("acquisition_date");
    val timeType = integer("time_type")
    val comment = varchar("comment",255);
}

// PaidListRepositoryの実装
@Service
class PaidListRepositoryImpl : PaidListRepository {
    override fun getAll(userId: UserId): List<Paid> {
        return transaction {
            val query = PaidTable.select {
                PaidTable.userId eq userId.value
            }
            query.map { convertToPaid(it) }
        }
    }
}

// Exposedがorg.joda.time.LocalDateTimeとかいうよく分からない日付を返してきたので、それをドメインモデルのDateに変換
private class JodaPaidAcquisitionDate(datetime: LocalDateTime) : PaidAcquisitionDate {
    private val datetime = datetime;
    override val date : Int
        get() = datetime.dayOfMonth
    override val month : Int
        get() = datetime.monthOfYear;
    override val year : Int
        get() = datetime.year;
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
        PaidId(it[PaidTable.id].value),
        JodaPaidAcquisitionDate(it[PaidTable.acquisitionDate].toLocalDateTime()),
        toPaidTimeType[it[PaidTable.timeType]]  ?: throw Exception("不正なtimeTypeがDBから検出されました。"),
        UserId(it[PaidTable.userId]),
        PaidReason(it[PaidTable.comment])
    )
}


