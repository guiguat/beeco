package com.guiguat.beeco.repository

import com.guiguat.beeco.model.Task
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface TaskRepository: JpaRepository<Task, UUID>