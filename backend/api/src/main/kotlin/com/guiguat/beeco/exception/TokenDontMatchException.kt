package com.guiguat.beeco.exception

import org.springframework.http.HttpStatus

class TokenDontMatchException: ApiError(HttpStatus.CONFLICT, "User doesn't match token")