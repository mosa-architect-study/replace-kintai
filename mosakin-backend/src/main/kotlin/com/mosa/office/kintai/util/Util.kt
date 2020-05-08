package com.mosa.office.kintai.util

class CacheMan<T> {
    var cache : T? = null
    fun getCacheOrElse(process:() -> T):T {
        return cache ?: {
            val res = process()
            cache = res
            res
        }()
    }
}