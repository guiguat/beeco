package com.guiguat.beeco.repository

import com.guiguat.beeco.model.Task
import org.springframework.data.domain.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface TaskRepository: JpaRepository<Task, UUID> {
    fun findAllByNameOrDescriptionOrTagsContaining(
        name: String,
        description: String,
        tags: String,
        pageable: Pageable,
    ): Page<Task>
    fun findAllByFreelancerId(fid: String): List<Task>
    fun findAllByOwnerId(fid: String): List<Task>
}