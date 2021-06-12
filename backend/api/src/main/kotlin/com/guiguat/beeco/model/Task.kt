package com.guiguat.beeco.model

import java.math.BigDecimal
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@Entity
class Task(
        @Id @Column(name = "service_id") var id: String,
        @Column(name = "min_price", nullable = false) var minPrice: BigDecimal,
        @Column(name = "max_price", nullable = false) var maxPrice: BigDecimal,
        @Column(name = "freelancer_id") var freelancerId: String?,
        @Column(name = "owner_id", updatable=false, nullable = false) var ownerId: String,
        var name: String,
        var description: String,
        var location: String?,
        var tags: String?,
        var status: Int = 0
)