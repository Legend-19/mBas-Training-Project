export function inputValidations() {
  var offerId = document.getElementById("offerId").value;
  var cost = document.getElementById("cost").value;
  var validityType = document.getElementById("validityType").value;   //nahi
  var pricePoint = document.getElementById("pricePoint").value;       //nahi
  var validity = document.getElementById("validity").value;           //nahi
  var lifecycle = document.getElementById("lifeCycleId").value;       //nahi
  var price = document.getElementById("price").value;                 
 
  if(offerId == ""){
    return "Enter OFFER ID";
  }


  return null;
}

window.onlyNumberKey = (evt) => { 
          
  // Only ASCII charactar in that range allowed 
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
      return false; 
  return true; 
} 


