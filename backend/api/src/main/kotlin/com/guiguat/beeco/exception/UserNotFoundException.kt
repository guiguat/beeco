package com.guiguat.beeco.exception

import org.springframework.http.HttpStatus

class UserNotFoundException : ApiError(HttpStatus.NOT_FOUND, "\"Usuário não encontrado\"")