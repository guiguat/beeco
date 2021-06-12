package com.guiguat.beeco.service

import com.guiguat.beeco.dto.TaskCreateRequest
import com.guiguat.beeco.dto.TaskSearchRequest
import com.guiguat.beeco.model.Task
import com.guiguat.beeco.repository.TaskRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import java.util.*

@Service
class TaskService @Autowired constructor(private val repo: TaskRepository) {
    fun search(request: TaskSearchRequest): Page<Task> {
        val pageable = PageRequest.of(request.pageNumber, request.pageSize,
                                      Sort.by(request.direction, "minPrice"))
        return if(request.search != null)
            repo.findAllByNameOrDescriptionOrTagsContainingIgnoreCaseAndFreelancerIdIsNull(
                request.search!!, request.search!!, request.search!!, pageable)
        else repo.findAll(pageable)
    }

    fun create(request: TaskCreateRequest, oid: String): Task = repo.save(request.toTask(oid))

    fun find(id: String): Optional<Task> {
        return repo.findById(id)
    }
}