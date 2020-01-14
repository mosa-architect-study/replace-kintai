package com.mosa.office.kintai.application.service

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

internal class UUIDUniqueIdGeneratorTest {

    @Test
    fun createUniqueId() {
        val gene = UUIDUniqueIdGenerator();
        val id1 = gene.generate();
        val id2 = gene.generate();
        Assertions.assertThat(id1).isNotEqualTo(id2)
    }

}