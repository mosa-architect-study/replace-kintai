package com.mosa.office.kintai.config

import org.slf4j.Logger
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import javax.annotation.PostConstruct
import javax.servlet.Filter
import javax.servlet.FilterChain
import javax.servlet.ServletRequest
import javax.servlet.ServletResponse
import javax.servlet.annotation.WebFilter
import javax.servlet.http.HttpServletResponse

@Component
@WebFilter("/*")
class AddVersionResponseHeaderFilter(
    @Value("\${deploy.version:#{null}}") private val deployVersion : String?,
    private val logger : Logger
) : Filter {

    @PostConstruct
    fun printDeployVersion() {
        logger.info("Kintai App Version: $deployVersion")
    }

    override fun doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) {
        val httpServletResponse = response as HttpServletResponse
        httpServletResponse.setHeader("Kintai-App-Version", deployVersion)
        chain.doFilter(request, response)
    }
}