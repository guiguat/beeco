package com.guiguat.beeco.model

import org.hibernate.annotations.GenericGenerator
import java.util.*
import javax.persistence.*

@Entity
class UserInfo(
        @Id
        @GeneratedValue(generator = "UUID")
        @GenericGenerator( name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
        @Column(name = "user_id") var id: UUID?,
        @Column(name = "first_name") var firstName: String,
        @Column(name = "last_name") var lastName: String,
        var email: String,
        var photo: String,
        var cellphone: String,
        var phone: String?,
        @Column(name = "rating_sum", nullable = false) var ratingSum: Long,
        @Column(name = "rating_count", nullable = false) var ratingCount: Long
)