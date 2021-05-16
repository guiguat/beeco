package com.guiguat.beeco.config

import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

@Configuration
@EnableWebSecurity
class SecurityConfig: WebSecurityConfigurerAdapter() {
    override fun configure(http: HttpSecurity?) {
        http!!.csrf().disable()
            .authorizeRequests {
                it.antMatchers(HttpMethod.POST, "/users").permitAll()
                    .anyRequest().authenticated()
            }
            .oauth2ResourceServer { it.jwt() }
    }
}