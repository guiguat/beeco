package com.guiguat.beeco.model

import org.keycloak.representations.idm.CredentialRepresentation
import org.keycloak.representations.idm.UserRepresentation
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

class UserRequest(
    @get:Size(min = 2, max = 20) var firstName: String,
    @get:Size(min = 2, max = 40) var lastName: String,
    @get:NotBlank
    @get:Email var email: String,
    @get:NotBlank var password: String,
    @get:NotBlank var photo: String,
    @get:Size(min = 5, max = 20) var cellphone: String,
    @get:Size(min = 5, max = 20) var phone: String?,
){
    fun toUserRepresentation(): UserRepresentation =
        UserRepresentation().apply {
            isEnabled = true
            username = this@UserRequest.email
            firstName = this@UserRequest.firstName
            lastName = this@UserRequest.lastName
            email = this@UserRequest.email
            credentials = listOf(CredentialRepresentation().apply {
                isTemporary = false
                type = CredentialRepresentation.PASSWORD
                value = this@UserRequest.password
            })}
    fun toUserInfo(): UserInfo =
        UserInfo(null, firstName, lastName, email, photo, cellphone, phone, 0L, 0L)
}

