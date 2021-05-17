package com.guiguat.beeco.service

import com.guiguat.beeco.model.UserRequest
import com.guiguat.beeco.repository.UserInfoRepository
import org.keycloak.admin.client.Keycloak
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.net.URI
import java.util.*
import javax.ws.rs.core.Response

@Service
class UserService @Autowired constructor(private val repo: UserInfoRepository, private val keycloak: Keycloak,
                                         @Value("\${keycloak.realm}") private val realm: String){
    private val statusCreated = 201
    fun create(request: UserRequest): ResponseEntity<Any> {
        val response = createKeycloakUser(request)
        val uuid = extractUserId(response)
        if(response.status == statusCreated && uuid != null){
            request.id = uuid
            repo.save(request.toUserInfo())
            return ResponseEntity.created(URI("localhost:8080/users/$uuid")).build()
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

    private fun extractUserId(res: Response) =
        (res.headers["location"]?.get(0) as String?)
            ?.split("/users/")?.get(1)
}