import {addOffer, deleteOffer, getOffers, offerPriceById, updateOffer, getOfferById} from "./api.js" 



var offerId = getCookieValue("offerId");
console.log(offerId);

function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}


if (getCookieValue("msession") == "true") {

$(document).ready(function(){

// document.getElementById("form").style.visibility = "hidden";
$("#mainNavbar").click(function(e){
    var x = document.getElementById("form");
    toggle(x);
})

$("#mainNavbar2").click(function(e){
    var x = document.getElementById("form2");
    toggle(x);
})

function toggle(x) {
  if (x.style.visibility == "hidden") {
     x.style.visibility = "visible";
     x.style.display = "block";
  } else {
    x.style.visibility = "hidden";
    x.style.display = "none";

  }
}

$("#individual").click(function(e){
    document.getElementById("cost").disabled = true;
    document.getElementById("validityType").disabled = false;
    document.getElementById("pricePoint").disabled = false;
    document.getElementById("validity").disabled = false;
    document.getElementById("lifeCycleId").disabled = false;
    document.getElementById("price").disabled = false;
    document.getElementById("nextRenewalOffer").disabled = false;
})

$("#bundled").click(function(e){
    document.getElementById("cost").disabled = false;
    document.getElementById("validityType").disabled = true;
    document.getElementById("pricePoint").disabled = true;
    document.getElementById("validity").disabled = true;
    document.getElementById("lifeCycleId").disabled = true;
    document.getElementById("price").disabled = true;
    document.getElementById("nextRenewalOffer").disabled = true;
})
$("#lifeCycleId").click(function(e){    

    var option = document.getElementById("lifeCycleId").value;
    var vt = document.getElementById("validityType");
    var v = document.getElementById("validity");

    vt.disabled = true;
    v.disabled = true;

    if(option == "CUT1 (20 Min)"){
        vt.value = "MM";
        v.value = "20";
    }else if(option == "CUT2 (30 Weekly)"){
        vt.value = "WW";
        v.value = "30";
    }else if(option == "CUT3 (30 Min)"){
        vt.value = "MM";
        v.value = "30";
    }else if(option == "DEF _LS (20 Days)"){
        vt.value = "DD";
        v.value = "20";
    }else{
        vt.disabled = false;
        v.disabled = false;
        vt.value = "";
        v.value = "";
    }

});

$("#pricePoint").click(function(e){    

    var option = document.getElementById("pricePoint").value;
    var p = document.getElementById("price");

    p.disabled = true;

    if(option == "FULL_TEST( INR 100 )"){
        p.value = "100";
    }else if(option == "OP( INR 100 )"){
        p.value = "100";
    }else if(option == "T12( INR 20 )"){
        p.value = "20";
    }else{
        p.disabled = false;
        p.value = "";
    }

});

$("#submitOffer").click(function(e){
    e.preventDefault();      
    var offerType,autoRenewal,nextRenewalOfferType,nextRenewalOffer;
    var offerId = document.getElementById('offerId').value;
    var offerDesc = document.getElementById("offerDescription").value;
    var offerStartDate = document.getElementById('offerStartDate').value;
    var offerExpiryDate = document.getElementById('offerExpiryDate').value;
    var lifeCycleId = document.getElementById("lifeCycleId").value;
    var validity = document.getElementById("validity").value;
    var validityType = document.getElementById("validityType").value;
    var pricePoint = document.getElementById("pricePoint").value;
    var price = document.getElementById("price").value;

    if(document.getElementById('yesAuto').checked){
        autoRenewal =  document.getElementById("yesAuto").value;
    }else{
        autoRenewal =  document.getElementById("noAuto").value;
    }
    if(document.getElementById('individual').checked){
        offerType =  document.getElementById("individual").value;
    }else{
        offerType =  document.getElementById("bundled").value;
    }
    if(document.getElementById('bundledRenew').checked){
        nextRenewalOfferType =  document.getElementById("bundledRenew").value;
    }else{
        nextRenewalOfferType =  document.getElementById("individualRenew").value;
    }

    var nextRenewalOffer = document.getElementById("nextRenewalOffer").value;
    var sendNotification;

    if(document.getElementById('sendNotificationsYes').checked){
        sendNotification =  document.getElementById("sendNotificationsYes").value;
    }else{
        sendNotification =  document.getElementById("sendNotificationsNo").value;
    }

    var jsonObj={
        offerType:offerType, offerId:offerId, offerDesc:offerDesc, startDate:offerStartDate,
        endDate:offerExpiryDate,lifeCycleId:lifeCycleId,pricePoint:pricePoint, autoRenewal:autoRenewal, 
        nextRenewalOffer:nextRenewalOffer ,offerPlan:price, renewalBundleType:nextRenewalOfferType, sendNotification:sendNotification
    
    }

    //console.log(jsonObj);
     updateOffer(jsonObj);
});


    getOffers().then(res=>{
         show(res);
        console.log(res)}).catch(err=>console.log(err));
  // console.log(offersJSON);

    function show(data) {
    data.forEach(row => {
        $('#nextRenewalOffer').append(`<option value=${row.offerDesc}>${row.offerDesc}</option>`);
    })

};

    getOfferById(offerId).then(res=>{
         fillData(res);
        console.log(res)}).catch(err=>console.log(err));
  // console.log(offersJSON);

    function fillData(data) {

        console.log(data);

        var offerType,autoRenewal,nextRenewalOfferType,nextRenewalOffer;
        var offId = document.getElementById('offerId'); 
        offId.disabled = true;
        offId.value = data.offerId;
        document.getElementById("offerDescription").value = data.offerDesc;
        document.getElementById('offerStartDate').value = data.startDate;
        document.getElementById('offerExpiryDate').value = data.endDate;
        document.getElementById("lifeCycleId").value = data.lifeCycleId;
        document.getElementById("pricePoint").value = data.pricePoint;
        document.getElementById("").value 

        if(data.offerType == "bundled") {
            document.getElementById("bundled").checked = true;
            document.getElementById("bundled").click();
        }
        if(data.offerType == "individual") {
            document.getElementById("individual").checked = true;
            document.getElementById("individual").click();
        }

       document.getElementById("offertyperow").disabled = true; 
       document.getElementById("lifeCycleId").click(); 
       document.getElementById("pricePoint").click();
    }



}); }
else {
    window.location.href = "http://localhost:8080/";
}