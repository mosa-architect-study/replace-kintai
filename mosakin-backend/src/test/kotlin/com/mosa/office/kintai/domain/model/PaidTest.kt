package com.mosa.office.kintai.domain.model

import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.Test
import java.time.LocalDate

internal class PaidTest {

    @Test
    fun PaidTimeType_isDuplicated_同日の場合に重複となるPaidTimeTypeの場合trueになる() {
        val allDay = PaidTimeType.ALL_DAY
        val am = PaidTimeType.AM
        val pm = PaidTimeType.PM
        assertThat(allDay.isDuplicated(am)).isEqualTo(true)
        assertThat(allDay.isDuplicated(pm)).isEqualTo(true)
        assertThat(allDay.isDuplicated(allDay)).isEqualTo(true)
        assertThat(am.isDuplicated(allDay)).isEqualTo(true)
        assertThat(am.isDuplicated(am)).isEqualTo(true)
        assertThat(am.isDuplicated(pm)).isEqualTo(false)
        assertThat(pm.isDuplicated(allDay)).isEqualTo(true)
        assertThat(pm.isDuplicated(am)).isEqualTo(false)
        assertThat(pm.isDuplicated(pm)).isEqualTo(true)
    }

    @Test
    fun Paid_assertNotDuplicated_同日の場合に重複となるPaidがある場合例外を投げる() {

        val testes1 = HasPaidTime(LocalDate.of(2019,1,1),PaidTimeType.PM)
        val testes2 = HasPaidTime(LocalDate.of(2019,1,1),PaidTimeType.AM)
        val testes3 = HasPaidTime(LocalDate.of(2019,1,2),PaidTimeType.PM)
        val testes4 = HasPaidTime(LocalDate.of(2019,1,1),PaidTimeType.ALL_DAY)

        testes1.assertNotDuplicated(testes2)
        testes1.assertNotDuplicated(testes3)
        assertThatThrownBy {
            testes1.assertNotDuplicated(testes4)
        }.isInstanceOf(DuplicatedPaidException::class.java)

    }

}