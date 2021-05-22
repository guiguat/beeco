package com.guiguat.beeco.service

import com.guiguat.beeco.dto.CreateUserRequest
import com.guiguat.beeco.dto.UpdateUserRequest
import com.guiguat.beeco.exception.UserNotFoundException
import com.guiguat.beeco.model.UserInfo
import com.guiguat.beeco.repository.UserInfoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.lang.RuntimeException
import java.net.URI
import java.util.*
import javax.ws.rs.core.Response

@Service
class UserService @Autowired constructor(private val repo: UserInfoRepository,
                                         private val keycloak: KeycloakUserService){
    private val statusCreated = 201
    fun create(request: CreateUserRequest): ResponseEntity<Any> {
        val response = keycloak.createKeycloakUser(request.toUserRepresentation())
        val uuid = extractUserId(response)
        if(response.status == statusCreated && uuid != null){
            request.id = uuid
            repo.save(request.toUserInfo())
            return ResponseEntity.created(URI("/users/$uuid")).build()
        }
        return ResponseEntity.status(response.status)
            .body(Optional.ofNullable(response.readEntity(Map::class.java)))
    }

    fun update(request: UpdateUserRequest, uid: String): UserInfo? {
        keycloak.updateKeycloakUser(request, uid)
        val user = repo.findById(uid)
            .orElseThrow{ UserNotFoundException() }
        request.applyChanges(user)
        return repo.save(user)
    }

    private fun extractUserId(res: Response) =
        (res.headers["location"]?.get(0) as String?)
            ?.split("/users/")?.get(1)

    fun find(id: String): Optional<UserInfo> {
        return repo.findById(id)
    }
}