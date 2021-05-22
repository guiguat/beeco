package com.guiguat.beeco.exception

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import org.springframework.http.HttpStatus

@JsonIgnoreProperties("stackTrace", "cause", "suppressed", "localizedMessage")
open class ApiError(
    var error: HttpStatus,
    override var message: String?
): Exception(message)

