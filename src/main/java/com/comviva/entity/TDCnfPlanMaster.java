package com.comviva.entity;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="t_d_cnf_plan_master")
public class TDCnfPlanMaster {
	
	@Id
	@Column(name="plan_id")
	private String planId;
	
	@Column(name="plan_short_desc",length = 512)
	private String planShortDesc;
	
	@Column(name="plan_long_desc", length = 1024)
	private String planLongDesc;
	
	@Column(name="service_id")
	private String serviceId;
	
	@Column(name="service_type")
	private String serviceType;
	
	@Column(name="next_plan_id")
	private String nextPlanId;
	
	@Column(name="status")
	private String status;
	
	@Column(name="lifecycle_id")
	private String lifeCycleId;
//	
//	@Column(name="service_priority", columnDefinition="int(10) default '10'")
//	private int servicePriority;
	
	@Column(name="start_date_time")
	private LocalDate startDateTime;
	
	@Column(name="end_date_time")
	private LocalDate endDateTime;
	
	@Column(name="auto_renewal")
	private String autoRenewal;
	
	@Column(name="try_n_buy_flag")
	private String tryNBuyFlag;
	
	@Column(name="discount_id")
	private String discountId;
	
//	@Column(name="subs_type", columnDefinition="int(10) default '10'")
//	private int subsType;
	
	@Column(name="file_retry_flag")
	private String fileRetryFlag;
	
	@Column(name=" deactivation_mode")
	private String deactivationMode;
	
	@Column(name="segment")
	private String segment;
	
	@Column(name="priodicity_plan")
	private String priodicityPlan;
	
//	@Column(name="priodicity_period")
//	private int priodicityPeriod;
	
	@Column(name="auto_ren_category")
	private String autoRenCategory;
	
	@Column(name="re_subs_allowed")
	private String reSubsAllowed;
	
	@Column(name="dynamic_life_cycle")
	private String dynamicLifeCycle;
	
	@Column(name="dynamic_lc_priority")
	private String dynamicLCPriority;
	
	@Column(name="trynbye_consent_req")
	private String tryNByeConsentReq;
	
	@Column(name="fail_action")
	private String failAction;
	
	@Column(name="every_time_charging")
	private String everyTimeCharging;
	
	@Column(name="rating_id")
	private String ratingId;
	
//	@Column(name="revenue_cycle", columnDefinition="int(10) default '10'")
//	private int revenueCycle;
	
	@Column(name="remarks")
	private String remarks;
	
	@Column(name="add_by")
	private String addBy;
	
	@Column(name="add_on")
	private Date addOn;
	
	@Column(name="approval_by")
	private String approvalBy;
	
	@Column(name="circle")
	private String circle;
	
	@Column(name="bearer")
	private String bearer;
	
	@Column(name="service_provider_id")
	private String serviceProviderId;
	
	@Column(name="provider_id")
	private String providerId;
	
	@Column(name="plan_group")
	private String planGroup;
	
	@Column(name="renewal_bundle_type")
	private String renewalBundleType;
	
	@Column(name="tone_type")
	private String toneType;
	
	public String getPlanId() {
		return planId;
	}

	public void setPlanId(String planId) {
		this.planId = planId;
	}

	public String getPlanShortDesc() {
		return planShortDesc;
	}

	public void setPlanShortDesc(String planShortDesc) {
		this.planShortDesc = planShortDesc;
	}

	public String getPlanLongDesc() {
		return planLongDesc;
	}

	public void setPlanLongDesc(String planLongDesc) {
		this.planLongDesc = planLongDesc;
	}

	public String getServiceId() {
		return serviceId;
	}

	public void setServiceId(String serviceId) {
		this.serviceId = serviceId;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public String getNextPlanId() {
		return nextPlanId;
	}

	public void setNextPlanId(String nextPlanId) {
		this.nextPlanId = nextPlanId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getLifeCycleId() {
		return lifeCycleId;
	}

	public void setLifeCycleId(String lifeCycleId) {
		this.lifeCycleId = lifeCycleId;
	}

//	public int getServicePriority() {
//		return servicePriority;
//	}
//
//	public void setServicePriority(int servicePriority) {
//		this.servicePriority = servicePriority;
//	}

	public LocalDate getStartDateTime() {
		return startDateTime;
	}

	public void setStartDateTime(LocalDate startDateTime) {
		this.startDateTime = startDateTime;
	}

	public LocalDate getEndDateTime() {
		return endDateTime;
	}

	public void setEndDateTime(LocalDate endDateTime) {
		this.endDateTime = endDateTime;
	}

	public String getAutoRenewal() {
		return autoRenewal;
	}

	public void setAutoRenewal(String autoRenewal) {
		this.autoRenewal = autoRenewal;
	}

	public String getTryNBuyFlag() {
		return tryNBuyFlag;
	}

	public void setTryNBuyFlag(String tryNBuyFlag) {
		this.tryNBuyFlag = tryNBuyFlag;
	}

	public String getDiscountId() {
		return discountId;
	}

	public void setDiscountId(String discountId) {
		this.discountId = discountId;
	}

//	public int getSubsType() {
//		return subsType;
//	}
//
//	public void setSubsType(int subsType) {
//		this.subsType = subsType;
//	}

	public String getFileRetryFlag() {
		return fileRetryFlag;
	}

	public void setFileRetryFlag(String fileRetryFlag) {
		this.fileRetryFlag = fileRetryFlag;
	}

	public String getDeactivationMode() {
		return deactivationMode;
	}

	public void setDeactivationMode(String deactivationMode) {
		this.deactivationMode = deactivationMode;
	}

	public String getSegment() {
		return segment;
	}

	public void setSegment(String segment) {
		this.segment = segment;
	}

	public String getPriodicityPlan() {
		return priodicityPlan;
	}

	public void setPriodicityPlan(String priodicityPlan) {
		this.priodicityPlan = priodicityPlan;
	}

//	public int getPriodicityPeriod() {
//		return priodicityPeriod;
//	}
//
//	public void setPriodicityPeriod(int priodicityPeriod) {
//		this.priodicityPeriod = priodicityPeriod;
//	}

	public String getAutoRenCategory() {
		return autoRenCategory;
	}

	public void setAutoRenCategory(String autoRenCategory) {
		this.autoRenCategory = autoRenCategory;
	}

	public String getReSubsAllowed() {
		return reSubsAllowed;
	}

	public void setReSubsAllowed(String reSubsAllowed) {
		this.reSubsAllowed = reSubsAllowed;
	}

	public String getDynamicLifeCycle() {
		return dynamicLifeCycle;
	}

	public void setDynamicLifeCycle(String dynamicLifeCycle) {
		this.dynamicLifeCycle = dynamicLifeCycle;
	}

	public String getDynamicLCPriority() {
		return dynamicLCPriority;
	}

	public void setDynamicLCPriority(String dynamicLCPriority) {
		this.dynamicLCPriority = dynamicLCPriority;
	}

	public String getTryNByeConsentReq() {
		return tryNByeConsentReq;
	}

	public void setTryNByeConsentReq(String tryNByeConsentReq) {
		this.tryNByeConsentReq = tryNByeConsentReq;
	}

	public String getFailAction() {
		return failAction;
	}

	public void setFailAction(String failAction) {
		this.failAction = failAction;
	}

	public String getEveryTimeCharging() {
		return everyTimeCharging;
	}

	public void setEveryTimeCharging(String everyTimeCharging) {
		this.everyTimeCharging = everyTimeCharging;
	}

	public String getRatingId() {
		return ratingId;
	}

	public void setRatingId(String ratingId) {
		this.ratingId = ratingId;
	}

//	public int getRevenueCycle() {
//		return revenueCycle;
//	}
//
//	public void setRevenueCycle(int revenueCycle) {
//		this.revenueCycle = revenueCycle;
//	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getAddBy() {
		return addBy;
	}

	public void setAddBy(String addBy) {
		this.addBy = addBy;
	}

	public Date getAddOn() {
		return addOn;
	}

	public void setAddOn(Date addOn) {
		this.addOn = addOn;
	}

	public String getApprovalBy() {
		return approvalBy;
	}

	public void setApprovalBy(String approvalBy) {
		this.approvalBy = approvalBy;
	}

	public String getCircle() {
		return circle;
	}

	public void setCircle(String circle) {
		this.circle = circle;
	}

	public String getBearer() {
		return bearer;
	}

	public void setBearer(String bearer) {
		this.bearer = bearer;
	}

	public String getServiceProviderId() {
		return serviceProviderId;
	}

	public void setServiceProviderId(String serviceProviderId) {
		this.serviceProviderId = serviceProviderId;
	}

	public String getProviderId() {
		return providerId;
	}

	public void setProviderId(String providerId) {
		this.providerId = providerId;
	}

	public String getPlanGroup() {
		return planGroup;
	}

	public void setPlanGroup(String planGroup) {
		this.planGroup = planGroup;
	}

	public String getRenewalBundleType() {
		return renewalBundleType;
	}

	public void setRenewalBundleType(String renewalBundleType) {
		this.renewalBundleType = renewalBundleType;
	}

	public String getToneType() {
		return toneType;
	}

	public void setToneType(String toneType) {
		this.toneType = toneType;
	}

	public String getBaseOfferId() {
		return baseOfferId;
	}

	public void setBaseOfferId(String baseOfferId) {
		this.baseOfferId = baseOfferId;
	}

	@Column(name="base_offer_id")
	private String baseOfferId;
}
