package com.guiguat.beeco.model

import org.hibernate.annotations.GenericGenerator
import java.math.BigDecimal
import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.validation.constraints.DecimalMin
import javax.validation.constraints.Digits

@Entity
class Task(
        @Id
        @GeneratedValue(generator = "UUID")
        @GenericGenerator( name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
        @Column(name = "service_id") var id: UUID?,
        var name: String,
        var description: String,
        @get:DecimalMin(value = "0.0", inclusive = false)
        @get:Digits(integer=5, fraction=2)
        @Column(name = "min_price", nullable = false)
        var minPrice: BigDecimal,
        @get:DecimalMin(value = "0.0", inclusive = false)
        @get:Digits(integer=5, fraction=2)
        @Column(name = "max_price", nullable = false)
        var maxPrice: BigDecimal,
        var location: String,
        var status: Int = 0,
        @Column(name = "freelancer_id", nullable = false)
        var freelancerId: UUID,
        @Column(name = "owner_id", updatable=false, nullable = false)
        var ownerId: UUID
)