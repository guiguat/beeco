package com.guiguat.beeco.controller

import com.guiguat.beeco.dto.TaskCreateRequest
import com.guiguat.beeco.model.Task
import com.guiguat.beeco.service.TaskService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.http.ResponseEntity.ok
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@Controller
@RequestMapping("/tasks")
class TaskController @Autowired constructor(private val service: TaskService) {
//    @GetMapping
//    fun list(@RequestParam ) ResponseEntity<Any> {
//        val taskPageable =
//        val tasks = service.search()
//        return if(user.isPresent) ok(user) else ResponseEntity.notFound().build()
//    }

    @GetMapping("/{id}")
    fun index(@PathVariable id: String): ResponseEntity<Any> {
        val user = service.find(id)
        return if(user.isPresent) ok(user) else ResponseEntity.notFound().build()
    }

    @PostMapping
    fun create(@Valid @RequestBody req: TaskCreateRequest): ResponseEntity<Task> = ok(service.create(req))

}