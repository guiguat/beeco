package com.guiguat.beeco.service

import com.guiguat.beeco.model.UserRequest
import com.guiguat.beeco.repository.UserInfoRepository
import org.keycloak.admin.client.Keycloak
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.util.*
import javax.ws.rs.core.Response

@Service
class UserService @Autowired constructor(private val repo: UserInfoRepository, private val keycloak: Keycloak,
                                         @Value("\${keycloak.realm}") private val realm: String){
    private val statusCreated = 201
    fun create(request: UserRequest): ResponseEntity<Any> {
        val response = createKeycloakUser(request)
        if(response.status == statusCreated){
            repo.save(request.toUserInfo())
            return ResponseEntity.status(HttpStatus.CREATED).build()
        }
        return ResponseEntity.status(response.status)
            .body(Optional.ofNullable(response.readEntity(Map::class.java)))
    }

    private fun createKeycloakUser(req: UserRequest): Response{
        return keycloak
            .realm(realm)
            .users()
            .create(req.toUserRepresentation())
    }


}