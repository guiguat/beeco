package com.guiguat.beeco.exception

import org.springframework.http.HttpStatus
import org.springframework.validation.FieldError

class ValidationError(
    var fields: List<ValidationFieldError>,
    override var message: String? = "Um ou mais campos estão inválidos, tente novamente",
): ApiError(HttpStatus.BAD_REQUEST, message){
    companion object {
        infix fun fromFieldError(e: FieldError) = ValidationFieldError(e.field, e.defaultMessage)
    }
    class ValidationFieldError(var field: String, var message: String?)
}