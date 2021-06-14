package com.guiguat.beeco.service

import com.guiguat.beeco.dto.TaskCreateRequest
import com.guiguat.beeco.dto.TaskSearchRequest
import com.guiguat.beeco.model.Task
import com.guiguat.beeco.model.UserInfo
import com.guiguat.beeco.repository.TaskRepository
import com.guiguat.beeco.repository.UserInfoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import java.util.*

@Service
class TaskService @Autowired constructor(private val repo: TaskRepository,
                                         private val userRepo: UserInfoRepository) {
    fun search(request: TaskSearchRequest): Page<Task> {
        val pageable = PageRequest.of(request.pageNumber, request.pageSize,
                                      Sort.by(request.direction, "minPrice")
                                          .and(Sort.by(Sort.Direction.DESC, "createdAt")))
        return if(request.search != null)
            repo.findAllByTitleOrDescriptionOrTagsContainingIgnoreCaseAndFreelancerIsNull(
                request.search!!, request.search!!, request.search!!, pageable)
        else repo.findAll(pageable)
    }

    fun create(request: TaskCreateRequest, oid: String): Task {
        val owner: UserInfo = userRepo.getOne(oid)
        return repo.save(request.toTask(owner))
    }

    fun find(id: String): Optional<Task> {
        return repo.findById(id)
    }
}