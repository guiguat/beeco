package com.guiguat.beeco.utils

import com.guiguat.beeco.exception.TokenDontMatchException
import com.guiguat.beeco.exception.UserNotFoundException
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken

object SecurityUtils {
    private fun getIdFromToken(context: SecurityContext): String? {
        val authentication = context.authentication  as JwtAuthenticationToken
        return authentication.token.subject
    }
    fun <R>protected(id: String, f: (id: String) -> R): R {
        val subject = getIdFromToken(SecurityContextHolder.getContext())
        if(subject != null && subject == id ) return f(id)
        throw TokenDontMatchException()
    }
    fun <R>withId(f: (id: String) -> R): R {
        val subject = getIdFromToken(SecurityContextHolder.getContext())
        if(subject != null ) return f(subject)
        throw UserNotFoundException()
    }
}