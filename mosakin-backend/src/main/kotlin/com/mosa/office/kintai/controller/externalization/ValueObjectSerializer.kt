package com.mosa.office.kintai.controller.externalization

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.databind.JsonSerializer
import com.fasterxml.jackson.databind.SerializerProvider
import com.mosa.office.kintai.domain.shared.ValueObject
import org.springframework.boot.jackson.JsonComponent

@JsonComponent
class ValueObjectSerializer : JsonSerializer<ValueObject<Any>>() {
    override fun serialize(value: ValueObject<Any>, gen: JsonGenerator, serializers: SerializerProvider) {
        // Value Objectの場合は、valueプロパティに対してシリアライズを行う。
        serializers.findValueSerializer(value.value.javaClass).serialize(value.value,gen,serializers)
    }
}
