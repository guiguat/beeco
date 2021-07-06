package com.guiguat.beeco.model

import javax.persistence.*

@Entity
class UserInfo(
        @[Id Column(name = "user_id")] var id: String?,
        @Column(name = "first_name") var firstName: String,
        @Column(name = "last_name") var lastName: String,
        var description: String,
        var email: String,
        var photo: String,
        var cellphone: String,
        var phone: String?,
        @Column(name = "rating_sum", nullable = false) var ratingSum: Long,
        @Column(name = "rating_count", nullable = false) var ratingCount: Long
)