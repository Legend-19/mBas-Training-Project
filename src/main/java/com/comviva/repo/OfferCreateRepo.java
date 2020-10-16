package com.comviva.repo;

import org.springframework.data.repository.CrudRepository;

import com.comviva.entity.TDCnfOfferMaster;

public interface OfferCreateRepo extends CrudRepository<TDCnfOfferMaster, String> {
	
	
}
