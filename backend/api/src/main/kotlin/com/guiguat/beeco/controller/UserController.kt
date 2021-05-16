package com.guiguat.beeco.controller

import com.guiguat.beeco.model.UserRequest
import com.guiguat.beeco.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import javax.validation.Valid

@Controller
@RequestMapping("/users")
class UserController @Autowired constructor(private val service: UserService) {
    @PostMapping
    fun createUser(@Valid @RequestBody user: UserRequest): ResponseEntity<Any> = service.create(user)

    @GetMapping
    fun protectedResource() = ResponseEntity.ok("Hello world")
}