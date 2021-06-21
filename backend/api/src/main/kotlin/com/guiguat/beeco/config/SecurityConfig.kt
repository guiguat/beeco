package com.guiguat.beeco.config

import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.web.servlet.invoke
import org.springframework.security.oauth2.server.resource.authentication.JwtIssuerAuthenticationManagerResolver

@Configuration
@EnableWebSecurity
class SecurityConfig: WebSecurityConfigurerAdapter() {
    val customAuthenticationManagerResolver = JwtIssuerAuthenticationManagerResolver(
        "http://localhost:8081/auth/realms/Beeco",
        "http://192.168.15.12:8081/auth/realms/Beeco")
    //TODO: substituir seu ip local na url para usar emulator do mobile
    override fun configure(http: HttpSecurity?) {
        http {
            csrf { disable() }
            authorizeRequests {
                authorize(HttpMethod.POST, "/users", permitAll)
                authorize(HttpMethod.PATCH, "/users/rating/*", permitAll)
                //authorize(HttpMethod.GET, "/users/me", authenticated)
                authorize(HttpMethod.GET, "/users/*", permitAll)
                authorize(anyRequest, authenticated)
            }
            oauth2ResourceServer {
                authenticationManagerResolver = customAuthenticationManagerResolver
            }
        }
    }
}