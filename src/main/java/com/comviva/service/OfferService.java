package com.comviva.service;

import java.util.List;

import com.comviva.entity.Login;
import com.comviva.entity.TDCnfOfferMaster;
import com.comviva.entity.TDCnfOfferPlan;
import com.comviva.entity.TDCnfPlanMaster;

public interface OfferService {
	
	List<TDCnfOfferMaster> getOffer();
	String getOfferPrice(String offerId);
	TDCnfOfferMaster addOffer(TDCnfOfferMaster tDCnfOfferMaster);
	TDCnfOfferMaster updateOffer(TDCnfOfferMaster tdCnfOfferMaster);
	TDCnfPlanMaster addPlan(TDCnfPlanMaster tdCnfPlanMaster);
	boolean deleteOffer(String offerId);
	boolean ifUserExists(Login loginDetails);
	List<TDCnfPlanMaster> getPlan();
	TDCnfOfferPlan linkOfferPlan(TDCnfOfferPlan tdCnfOfferPlan);
	TDCnfOfferMaster getOfferById(String offerId);
	public Login signUp(Login loginDetails);
	
}
