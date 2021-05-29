package com.guiguat.beeco.dto

import com.guiguat.beeco.model.UserInfo
import javax.validation.constraints.Email
import javax.validation.constraints.Size

class UpdateUserRequest(
    @get:Size(min = 2, max = 20) var firstName: String?,
    @get:Size(min = 2, max = 40) var lastName: String?,
    @get:Size(min = 5) @get:Email var email: String?,
    var photo: String?,
    @get:Size(min = 5, max = 20) var cellphone: String?,
    @get:Size(min = 5, max = 20) var phone: String?,
){
    fun applyChanges(user: UserInfo) = user.apply {
        firstName = this@UpdateUserRequest.firstName ?: firstName
        lastName = this@UpdateUserRequest.lastName ?: lastName
        email = this@UpdateUserRequest.email ?: email
        photo = this@UpdateUserRequest.photo ?: photo
        cellphone = this@UpdateUserRequest.cellphone ?: cellphone
        phone = this@UpdateUserRequest.phone ?: phone
    }
}

