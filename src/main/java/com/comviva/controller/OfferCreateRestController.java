package com.comviva.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mariadb.jdbc.internal.logging.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comviva.entity.Login;
import com.comviva.entity.TDCnfOfferMaster;
import com.comviva.entity.TDCnfOfferPlan;
import com.comviva.entity.TDCnfPlanMaster;
import com.comviva.service.OfferService;

import ch.qos.logback.classic.Logger;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")

public class OfferCreateRestController {
	
//private static final Logger LOGGER = LoggerFactory.getLogger(OfferCreateRestController.class);
	
	@Autowired
	OfferService offerService;

	@PostMapping("/addplan")
	public TDCnfPlanMaster addplan(@RequestBody TDCnfPlanMaster tdCnfPlanMaster) {
		return offerService.addPlan(tdCnfPlanMaster);
	}
	
	@GetMapping("/getoffers")
	public List<TDCnfOfferMaster> getOffer() {
		System.out.print("Get all Offers");
//		LOGGER.info("getOffer():="+ offerService.getOffer());
		return offerService.getOffer();
	}
	
	@GetMapping("/offerprice/{offerID}")
	public Map<String, String> getOfferPrice(@PathVariable String offerID) {
		System.out.println("Price");
		Map<String, String> map=new HashMap<>();
		map.put("price", offerService.getOfferPrice(offerID));
		return map;
	}
	
	@PostMapping("/addoffer")
	public TDCnfOfferMaster addOffer(@RequestBody TDCnfOfferMaster tDCnfOfferMaster) {
		System.out.println("Create Offer");
		return offerService.addOffer(tDCnfOfferMaster);
	}
	
	@GetMapping("/deleteoffer/{offerId}")
	public boolean deleteOffer(@PathVariable("offerId") String offerID) {
		System.out.print("Delete Offer");
		return offerService.deleteOffer(offerID);
	}
	
	@PostMapping("/updateoffer")
	public TDCnfOfferMaster updateOffer(@RequestBody TDCnfOfferMaster tdcnfOfferMaster) {
		return offerService.updateOffer(tdcnfOfferMaster);
	}
	
	
	@GetMapping("/getplans")
	public List<TDCnfPlanMaster> getPlans(){
		return offerService.getPlan();
	}
	
	@PostMapping("/login")
	public Map<String, Boolean> loginUser(@RequestBody Login loginDetails){
		Map<String, Boolean> map=new HashMap<>();
		map.put("valid", offerService.ifUserExists(loginDetails));
		return map;
	}
	
	@PostMapping("/linkOfferPlan")
	public TDCnfOfferPlan offerPlan(@RequestBody TDCnfOfferPlan tdCnfOfferPlan) {
		return offerService.linkOfferPlan(tdCnfOfferPlan);
	}
	
	@GetMapping("/getoffer/{offerID}")
	public TDCnfOfferMaster getOffer(@PathVariable String offerID) {
		return offerService.getOfferById(offerID);
	}
	
	
}
