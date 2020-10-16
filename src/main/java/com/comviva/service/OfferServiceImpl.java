package com.comviva.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.comviva.entity.Login;
import com.comviva.entity.TDCnfOfferMaster;
import com.comviva.entity.TDCnfOfferPlan;
import com.comviva.entity.TDCnfPlanMaster;
import com.comviva.repo.LoginRepo;
import com.comviva.repo.OfferCreateRepo;
import com.comviva.repo.OfferPlanLinkRepo;
import com.comviva.repo.PlanCreateRepo;

@Repository
public class OfferServiceImpl implements OfferService {
	
	@Autowired
	OfferCreateRepo offerCreateRepo;
	
	@Autowired
	PlanCreateRepo planCreateRepo;
	
	@Autowired
	LoginRepo loginRepo;
	
	@Autowired
	OfferPlanLinkRepo offerPlanLinkRepo;

	@Override
	public List<TDCnfOfferMaster> getOffer() {
		return (List<TDCnfOfferMaster>)offerCreateRepo.findAll();
	}

	@Override
	public String getOfferPrice(String offerId) {
		Optional<TDCnfOfferMaster> optionalTdCnfOfferMaster=offerCreateRepo.findById(offerId);
		TDCnfOfferMaster tdCnfOfferMaster=optionalTdCnfOfferMaster.get();
		return tdCnfOfferMaster.getPricePoint();
	}

	@Override
	public TDCnfOfferMaster addOffer(TDCnfOfferMaster tDCnfOfferMaster) {
		offerCreateRepo.save(tDCnfOfferMaster);
		return tDCnfOfferMaster;
	}

	@Override
	public TDCnfPlanMaster addPlan(TDCnfPlanMaster tdCnfPlanMaster) {
		planCreateRepo.save(tdCnfPlanMaster);
		return tdCnfPlanMaster;
	}

	@Override
	public boolean deleteOffer(String offerId) {
		if(offerCreateRepo.findById(offerId)==null)
			return false;
		offerCreateRepo.deleteById(offerId);
		return true;
	}

	@Override
	public TDCnfOfferMaster updateOffer(TDCnfOfferMaster tdCnfOfferMaster) {
		offerCreateRepo.save(tdCnfOfferMaster);
		return tdCnfOfferMaster;
	}

	@Override
	public boolean ifUserExists(Login loginDetails) {
//		System.out.println(loginDetails.getUsername());
		Optional<Login> optionalLogin=loginRepo.findById(loginDetails.getUsername());
		if(!(optionalLogin.isPresent()))
			return false;
		Login login=optionalLogin.get();
		if(!(loginDetails.getPassword().equals(login.getPassword())))
			return false;
		return true;
	}

	@Override
	public List<TDCnfPlanMaster> getPlan() {
		return (List<TDCnfPlanMaster>)planCreateRepo.findAll();
	}

	@Override
	public TDCnfOfferPlan linkOfferPlan(TDCnfOfferPlan tdCnfOfferPlan) {
		offerPlanLinkRepo.save(tdCnfOfferPlan);
		return tdCnfOfferPlan;
	}
	
	@Override
	public TDCnfOfferMaster getOfferById(String offerId) {		
		Optional<TDCnfOfferMaster> optionalTdCnfOfferMaster=offerCreateRepo.findById(offerId);
		TDCnfOfferMaster tdCnfOfferMaster=optionalTdCnfOfferMaster.get();
		return tdCnfOfferMaster;
	}

}
