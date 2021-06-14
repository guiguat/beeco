package com.guiguat.beeco.model

import java.math.BigDecimal
import java.time.LocalDateTime
import javax.persistence.*

@Entity
class Task(
        @Id @Column(name = "task_id")
        var id: String,
        @Column(name = "min_price")
        var minPrice: BigDecimal,
        @Column(name = "max_price")
        var maxPrice: BigDecimal,
        @Column(updatable = false, nullable = false)
        var createdAt: LocalDateTime? = LocalDateTime.now(),
        @ManyToOne
        @JoinColumn(name = "freelancer_id")
        var freelancer: UserInfo? = null,
        @ManyToOne
        @JoinColumn(name = "owner_id")
        var owner: UserInfo,
        var title: String,
        var description: String,
        var location: String?,
        var tags: String,
        var status: Int? = 0,
)