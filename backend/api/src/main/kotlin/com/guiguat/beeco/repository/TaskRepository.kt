package com.guiguat.beeco.repository

import com.guiguat.beeco.model.Task
import org.springframework.data.domain.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TaskRepository: JpaRepository<Task, String> {
    fun findAllByNameOrDescriptionOrTagsContainingIgnoreCaseAndFreelancerIdIsNull(
        name: String,
        description: String,
        tags: String,
        pageable: Pageable,
    ): Page<Task>
    fun findAllByFreelancerIdOrOwnerId(fid: String, oid: String): List<Task>
}