package com.guiguat.beeco.controller

import com.guiguat.beeco.dto.TaskCreateRequest
import com.guiguat.beeco.dto.TaskSearchRequest
import com.guiguat.beeco.model.Task
import com.guiguat.beeco.service.TaskService
import com.guiguat.beeco.utils.SecurityUtils.withId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Sort
import org.springframework.http.ResponseEntity
import org.springframework.http.ResponseEntity.ok
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@Controller
@RequestMapping("/tasks")
class TaskController @Autowired constructor(private val service: TaskService) {
    @GetMapping
    fun list(@RequestParam("s", required = false) search: String?,
             @RequestParam("page") page: Int,
             @RequestParam("size") size: Int,
             @RequestParam("dir") dir: Sort.Direction?): ResponseEntity<Any> {
        val taskPageable = TaskSearchRequest(pageNumber = page, pageSize = size).apply {
            this.search = search ?: this.search
            direction = dir ?: this.direction
        }
        return ok(service.search(taskPageable))
    }

    @GetMapping("/{id}")
    fun index(@PathVariable id: String): ResponseEntity<Any> {
        val user = service.find(id)
        return if(user.isPresent) ok(user) else ResponseEntity.notFound().build()
    }

    @PostMapping
    fun create(@Valid @RequestBody req: TaskCreateRequest): ResponseEntity<Task> = withId { ok(service.create(req, it)) }

}