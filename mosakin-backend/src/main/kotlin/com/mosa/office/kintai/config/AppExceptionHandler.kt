package com.mosa.office.kintai.config

import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler


@RestControllerAdvice
class AppExceptionHandler : ResponseEntityExceptionHandler() {
    @ExceptionHandler(Exception::class)
    fun handleAllException(ex: Exception, request: WebRequest): ResponseEntity<Any> {
        ex.printStackTrace()
        return super.handleExceptionInternal(ex, "Internal Server Error", HttpHeaders.EMPTY , HttpStatus.INTERNAL_SERVER_ERROR, request)
    }

    @ExceptionHandler(AuthenticationException::class)
    fun handleAuthenticationException(ex: AuthenticationException,request :WebRequest) : ResponseEntity<Any> {
        return super.handleExceptionInternal(ex,"Authentication Error", HttpHeaders.EMPTY, HttpStatus.FORBIDDEN,request)
    }
}