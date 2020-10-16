package com.comviva.bean;

import java.util.Date;

public class OfferCreateBean {
	
	//data
	private String offerDesc;
	private String offerPlan;
	private String offerType;
	private String renewalBundleType;
	private Date startDate;
	private Date endDate;
	private String offerId;
	private String price;
	private String lifecycleId;
	private String validityType;
	private String validity;
	private String pricePoint;
	private String chargeAmount;     //TDCnfOffer Entity main nahi hain
	private String nextRenewalOffer;
	private String autoRenewal;
	public String getOfferDesc() {
		return offerDesc;
	}
	public void setOfferDesc(String offerDesc) {
		this.offerDesc = offerDesc;
	}
	public String getOfferPlan() {
		return offerPlan;
	}
	public void setOfferPlan(String offerPlan) {
		this.offerPlan = offerPlan;
	}
	public String getOfferType() {
		return offerType;
	}
	public void setOfferType(String offerType) {
		this.offerType = offerType;
	}
	public String getRenewalBundleType() {
		return renewalBundleType;
	}
	public void setRenewalBundleType(String renewalBundleType) {
		this.renewalBundleType = renewalBundleType;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getOfferId() {
		return offerId;
	}
	public void setOfferId(String offerId) {
		this.offerId = offerId;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getLifecycleId() {
		return lifecycleId;
	}
	public void setLifecycleId(String lifecycleId) {
		this.lifecycleId = lifecycleId;
	}
	public String getValidityType() {
		return validityType;
	}
	public void setValidityType(String validityType) {
		this.validityType = validityType;
	}
	public String getValidity() {
		return validity;
	}
	public void setValidity(String validity) {
		this.validity = validity;
	}
	public String getPricePoint() {
		return pricePoint;
	}
	public void setPricePoint(String pricePoint) {
		this.pricePoint = pricePoint;
	}
	public String getChargeAmount() {
		return chargeAmount;
	}
	public void setChargeAmount(String chargeAmount) {
		this.chargeAmount = chargeAmount;
	}
	public String getNextRenewalOffer() {
		return nextRenewalOffer;
	}
	public void setNextRenewalOffer(String nextRenewalOffer) {
		this.nextRenewalOffer = nextRenewalOffer;
	}
	public String getAutoRenewal() {
		return autoRenewal;
	}
	public void setAutoRenewal(String autoRenewal) {
		this.autoRenewal = autoRenewal;
	}

	
	
}
