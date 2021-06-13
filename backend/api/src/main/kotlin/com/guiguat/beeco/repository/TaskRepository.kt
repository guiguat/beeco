package com.guiguat.beeco.repository

import com.guiguat.beeco.model.Task
import com.guiguat.beeco.model.UserInfo
import org.springframework.data.domain.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TaskRepository: JpaRepository<Task, String> {
    fun findAllByTitleOrDescriptionOrTagsContainingIgnoreCaseAndFreelancerIsNull(
        title: String,
        description: String,
        tags: String,
        pageable: Pageable,
    ): Page<Task>
    fun findAllByFreelancerOrOwner(freelancer: UserInfo, owner: UserInfo): List<Task>
}