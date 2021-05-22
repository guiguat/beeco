package com.guiguat.beeco.dto

import com.guiguat.beeco.model.UserInfo
import org.keycloak.representations.idm.CredentialRepresentation
import org.keycloak.representations.idm.UserRepresentation
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

class CreateUserRequest(
    var id: String?,
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
            id = this@CreateUserRequest.id?.toString()
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
        UserInfo(id, firstName, lastName, email, photo, cellphone, phone, 0L, 0L)
}

