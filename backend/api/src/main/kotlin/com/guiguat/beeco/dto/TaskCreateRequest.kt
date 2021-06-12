package com.guiguat.beeco.dto

import com.guiguat.beeco.model.Task
import java.math.BigDecimal
import java.util.*
import javax.validation.constraints.DecimalMin
import javax.validation.constraints.Digits
import javax.validation.constraints.Size

class TaskCreateRequest (
    @get:DecimalMin(value = "0.0", inclusive = false)
    @get:Digits(integer=5, fraction=2)
    var minPrice: BigDecimal,
    @get:DecimalMin(value = "0.0", inclusive = false)
    @get:Digits(integer=5, fraction=2)
    var maxPrice: BigDecimal,
    var freelancerId: String?,
    @get:Size(min = 5, max = 40)
    var name: String,
    @get:Size(min = 5, max = 140)
    var description: String,
    var location: String?,
    var tags: List<String>
){
    fun toTask(ownerId: String) = Task(UUID.randomUUID().toString(),
        minPrice, maxPrice, freelancerId, ownerId, name, description, location,
        tags = tags.joinToString { s -> s }, status = 0)
}