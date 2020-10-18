// window.onload=function(){
//     document.getElementById("getOffersBtn").addEventListener("click", getOffers);
//     document.getElementById("addOfferBtn").addEventListener("click", addOffer);
//     document.getElementById("deleteOfferBtn").addEventListener("click", deleteOffer);
//     document.getElementById("offerPriceByIdBtn").addEventListener("click", offerPriceById);
  
//   }
  
const baseURL = "http://localhost:8080/api"

  var jsonData = {
          "offerId": "7",
          "offerDesc": "idea",
          "offerPlan": "500",
          "offerType": "postpaid",
          "renewalBundleType": "aa",
          "startDate": "2020-02-01",
          "endDate": "2020-02-02",
          "lifeCycleId": "bb",
          "pricePoint": "50",
          "autoRenewal": "aa",
          "nextRenewalOffer": "bb",
          "sendNotification": "no"
      }; 
  
  export function getOffers(){

      return fetch(baseURL+"/getoffers", {
        method:"GET"
      }).then(res=>res.json()).catch(err=>console.log(err));

  }  
  
  
  export function addOffer(offerData){
    return $.ajax({
                type: 'POST',
                url: baseURL+"/addoffer",
                data: JSON.stringify(offerData), // or JSON.stringify ({name: 'jonas'}),
                success: function(data) { 
                    console.log(data);
                    alert("Offer Added");
                    window.location.reload();
                },
                contentType: "application/json",
                dataType: 'json'
            });     
  }

    export function updateOffer(offerData){
    return $.ajax({
                type: 'POST',
                url: baseURL+"/updateoffer",
                data: JSON.stringify(offerData), // or JSON.stringify ({name: 'jonas'}),
                success: function(data) { 
                    console.log(data);
                    alert("Offer Updated");
                },
                contentType: "application/json",
                dataType: 'json'
            });     
  }
  
  export function deleteOffer(offerId){
  
       console.log("http://localhost:8080/api/deleteoffer/" + offerId);
       $.ajax({
          url: baseURL+"/deleteoffer/" + offerId,
          type: 'GET',
          success: function(res) {
              console.log(res);                       
          }
      });
  }  

    export function getOfferById(offerId){
  
     return fetch(baseURL+"/getoffer/" + offerId, {
        method:"GET"
      }).then(res=>res.json()).catch(err=>console.log(err));
  } 
  
  export function offerPriceById(){
  
       var offerId = document.getElementById("offerPriceById").value;
       console.log("http://localhost:8080/api/deleteoffer/" + offerId);
       $.ajax({
          url:  baseURL+"/offerprice" + offerId,
          type: 'GET',
          success: function(res) {
              console.log(res);  
              document.getElementById("output4").innerHTML = JSON.stringify(res);          
          }
      });
  }

  export function isLogin(user) {
    return $.ajax({
        type: 'POST',
        url: baseURL+"/login",
        data: JSON.stringify(user), // or JSON.stringify ({name: 'jonas'}),
        success: function(data) { 
            console.log(data);
        },
        contentType: "application/json",
        dataType: 'json'
    });
  }

  export function getPlans(){

    return fetch(baseURL+"/getplans", {
      method:"GET"
    }).then(res=>res.json()).catch(err=>console.log(err));

}

export function addPlan(planData){
  return $.ajax({
              type: 'POST',
              url: baseURL+"/linkOfferPlan",
              data: JSON.stringify(planData), // or JSON.stringify ({name: 'jonas'}),
              success: function(data) { 
                  console.log(data);
                  alert("Plan Added");
              },
              contentType: "application/json",
              dataType: 'json'
          });     
}