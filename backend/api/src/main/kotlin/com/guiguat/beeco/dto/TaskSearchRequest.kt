package com.guiguat.beeco.dto

import org.springframework.data.domain.Sort

class TaskSearchRequest(
    var search: String? = null,
    var pageNumber: Int = 1,
    var pageSize: Int = 10,
    var direction: Sort.Direction = Sort.Direction.DESC
)
