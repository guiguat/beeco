package com.guiguat.beeco.dto

import com.guiguat.beeco.model.Task
import com.guiguat.beeco.model.UserInfo
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
    var title: String,
    @get:Size(min = 5, max = 240)
    var description: String,
    var location: String?,
    var tags: List<String>
){
    fun toTask(owner: UserInfo) = Task(id = UUID.randomUUID().toString(), minPrice = minPrice,
                                        maxPrice = maxPrice, owner = owner,
                                        title = title, description = description, location = location,
                                        tags = tags.joinToString { s -> s }, status = 0)
}