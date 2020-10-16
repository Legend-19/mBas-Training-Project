package com.comviva.repo;

import org.springframework.data.repository.CrudRepository;

import com.comviva.entity.Login;

public interface LoginRepo extends CrudRepository<Login, String> {
	
}
