package com.guiguat.beeco.dto

import org.springframework.data.domain.Sort

class TaskSearchRequest(
    val search: String?,
    val pageNumber: Int = 1,
    val pageSize: Int = 10,
    val direction: Sort.Direction = Sort.Direction.DESC
)
