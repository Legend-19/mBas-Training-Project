package com.comviva.entity;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="t_d_cnf_offer_master")
public class TDCnfOfferMaster {
	
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="offer_id")
	private String offerId;
	
	@Column(name="offer_desc")
	private String offerDesc;
	
	@Column(name="offer_plan")
	private String offerPlan;
	
	@Column(name="offer_type")
	private String offerType;
	
	@Column(name="renewal_bundle_type")
	private String renewalBundleType;
	
	@Column(name="start_date")
	private LocalDate startDate;
	
	@Column(name="end_date")
	private LocalDate endDate;
	
	@Column(name="lifecycle_id")
	private String lifeCycleId;
	
	@Column(name="price_point")
	private String pricePoint;
	
	@Column(name="auto_renewal")
	private String autoRenewal;
	
	@Column(name="next_renewal_offer")
	private String nextRenewalOffer;
	
	@Column(name="send_notification")
	private String sendNotification;
	
	public TDCnfOfferMaster() {
		
	}

	public TDCnfOfferMaster(String offerId, String offerDesc, String offerPlan, String offerType,
			String renewalBundleType, LocalDate startDate, LocalDate endDate, String lifeCycleId, String pricePoint,
			String autoRenewal, String nextRenewalOffer, String sendNotification) {
		super();
		this.offerId = offerId;
		this.offerDesc = offerDesc;
		this.offerPlan = offerPlan;
		this.offerType = offerType;
		this.renewalBundleType = renewalBundleType;
		this.startDate = startDate;
		this.endDate = endDate;
		this.lifeCycleId = lifeCycleId;
		this.pricePoint = pricePoint;
		this.autoRenewal = autoRenewal;
		this.nextRenewalOffer = nextRenewalOffer;
		this.sendNotification = sendNotification;
	}

	public String getOfferId() {
		return offerId;
	}

	public void setOfferId(String offerId) {
		this.offerId = offerId;
	}

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

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public String getLifeCycleId() {
		return lifeCycleId;
	}

	public void setLifeCycleId(String lifeCycleId) {
		this.lifeCycleId = lifeCycleId;
	}

	public String getPricePoint() {
		return pricePoint;
	}

	public void setPricePoint(String pricePoint) {
		this.pricePoint = pricePoint;
	}

	public String getAutoRenewal() {
		return autoRenewal;
	}

	public void setAutoRenewal(String autoRenewal) {
		this.autoRenewal = autoRenewal;
	}

	public String getNextRenewalOffer() {
		return nextRenewalOffer;
	}

	public void setNextRenewalOffer(String nextRenewalOffer) {
		this.nextRenewalOffer = nextRenewalOffer;
	}

	public String getSendNotification() {
		return sendNotification;
	}

	public void setSendNotification(String sendNotification) {
		this.sendNotification = sendNotification;
	}
	
}
