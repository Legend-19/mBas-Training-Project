package com.comviva.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="t_d_cnf_offer_plan")
public class TDCnfOfferPlan {
	
	@Id
	@Column(name="offer_id")
	private String offerId;
	
	@Column(name="plan_id")
	private String planId;
	
	@Column(name="order_no")
	private String orderNo;

	public String getOfferId() {
		return offerId;
	}

	public void setOfferId(String offerId) {
		this.offerId = offerId;
	}

	public String getPlanId() {
		return planId;
	}

	public void setPlanId(String planId) {
		this.planId = planId;
	}

	public String getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}
	
}
