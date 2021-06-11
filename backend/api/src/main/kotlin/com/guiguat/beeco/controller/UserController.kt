package com.guiguat.beeco.controller

import com.guiguat.beeco.dto.CreateUserRequest
import com.guiguat.beeco.dto.UpdateUserRequest
import com.guiguat.beeco.model.UserInfo
import com.guiguat.beeco.service.UserService
import com.guiguat.beeco.utils.SecurityUtils.protected
import com.guiguat.beeco.utils.SecurityUtils.withId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.http.ResponseEntity.ok
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@Controller
@RequestMapping("/users")
class UserController @Autowired constructor(private val service: UserService) {
    @GetMapping("/{id}")
    fun index(@PathVariable id: String): ResponseEntity<Any> {
        val user = service.find(id)
        return if(user.isPresent) ok(user) else ResponseEntity.notFound().build()
    }

    @GetMapping("/me")
    fun index() = withId {
            val user = service.find(it)
            return@withId if(user.isPresent) ok(user) else ResponseEntity.notFound().build()
        }

    @PostMapping
    fun create(@Valid @RequestBody user: CreateUserRequest): ResponseEntity<Any> = service.create(user)

    @PatchMapping("/{id}")
    fun update(@Valid @RequestBody user: UpdateUserRequest,
               @PathVariable id: String,): ResponseEntity<UserInfo> {
        return protected(id){
            ok(service.update(user, it))
        }
    }
}