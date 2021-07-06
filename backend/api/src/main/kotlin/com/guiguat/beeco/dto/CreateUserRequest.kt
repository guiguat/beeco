package com.guiguat.beeco.dto

import com.guiguat.beeco.model.UserInfo
import org.keycloak.representations.idm.CredentialRepresentation
import org.keycloak.representations.idm.UserRepresentation
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

class CreateUserRequest(
    @get:Size(min = 2, max = 20) var firstName: String,
    @get:Size(min = 2, max = 40) var lastName: String,
    @get:Size(min = 1, max = 140) var description: String,
    @get:[NotBlank Email] var email: String,
    @get:NotBlank var password: String,
    @get:NotBlank var photo: String,
    @get:Size(min = 5, max = 20) var cellphone: String,
    @get:Size(min = 5, max = 20) var phone: String?,
){
    fun toUserRepresentation(): UserRepresentation =
        UserRepresentation().apply {
            isEnabled = true
            id = null
            username = this@CreateUserRequest.email
            firstName = this@CreateUserRequest.firstName
            lastName = this@CreateUserRequest.lastName
            email = this@CreateUserRequest.email
            credentials = listOf(CredentialRepresentation().apply {
                isTemporary = false
                type = CredentialRepresentation.PASSWORD
                value = this@CreateUserRequest.password
            })}
    fun toUserInfo(): UserInfo =
        UserInfo(null, firstName, lastName, description, email, photo, cellphone, phone, 0L, 0L)
}

