package com.mosa.office.kintai.gateway

import com.mosa.office.kintai.domain.model.Paid
import com.mosa.office.kintai.domain.model.PaidRepository
import com.mosa.office.kintai.domain.model.PaidTimeType
import com.mosa.office.kintai.gateway.mapper.mapToPaid
import com.mosa.office.kintai.gateway.table.PaidTable
import org.jetbrains.exposed.sql.*
import org.springframework.stereotype.Service
import java.time.LocalDate

// PaidListRepositoryの実装
@Service
class PaidRepositoryImpl : PaidRepository {
    override fun getAllByUserId(userId: String): List<Paid> {

        val query = PaidTable.select {
            PaidTable.userId eq userId
        }
        return query.map { mapToPaid(it) }

    }

    override fun add(paid: Paid) {

        PaidTable.insert {
            it[id] = paid.paidId
            it[userId] = paid.paidAcquisitionUserId
            it[reason] = paid.paidReason
            it[timeType] = paid.paidTimeType.toString()
            it[acquisitionDate] = paid.paidAcquisitionDate
        }

    }

    override fun update(paid: Paid) {
        PaidTable.update({
            PaidTable.id eq paid.paidId
        }) {
            it[reason] = paid.paidReason
            it[timeType] = paid.paidTimeType.toString()
            it[acquisitionDate] = paid.paidAcquisitionDate
        }
    }

    override fun getAll(): List<Paid> {
        val query = PaidTable.selectAll()
        return query.map { mapToPaid(it) }
    }
}
