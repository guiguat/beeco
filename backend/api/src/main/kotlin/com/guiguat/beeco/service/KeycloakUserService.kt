package com.guiguat.beeco.service

import com.guiguat.beeco.dto.UpdateUserRequest
import com.guiguat.beeco.exception.UserNotFoundException
import org.keycloak.admin.client.Keycloak
import org.keycloak.admin.client.resource.UserResource
import org.keycloak.representations.idm.UserRepresentation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import javax.ws.rs.core.Response

@Service
class KeycloakUserService @Autowired constructor(private val keycloak: Keycloak,
                                                 @Value("\${keycloak.realm}") private val realm: String){
    fun updateKeycloakUser(user: UpdateUserRequest, uid: String) {
        val maybeUserResource: UserResource? = keycloak.realm(realm).users().get(uid)
        val maybeUserRepresentation: UserRepresentation? = maybeUserResource?.toRepresentation()
        maybeUserRepresentation?.apply {
            email = user.email ?: email
            firstName = user.firstName ?: firstName
            lastName = user.lastName ?: lastName
        }
        if(maybeUserRepresentation != null) maybeUserResource.update(maybeUserRepresentation)
        else throw UserNotFoundException()
    }

    fun createKeycloakUser(user: UserRepresentation): Response {
        return keycloak
            .realm(realm)
            .users()
            .create(user)
    }
}