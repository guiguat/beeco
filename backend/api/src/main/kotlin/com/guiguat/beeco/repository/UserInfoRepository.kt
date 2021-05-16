package com.guiguat.beeco.repository

import com.guiguat.beeco.model.UserInfo
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserInfoRepository: JpaRepository<UserInfo, UUID>