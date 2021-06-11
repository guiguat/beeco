package com.guiguat.beeco.repository

import com.guiguat.beeco.model.UserInfo
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserInfoRepository: CrudRepository<UserInfo, String>