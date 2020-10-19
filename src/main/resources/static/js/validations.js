export function inputValidations() {
  var offerId = document.getElementById("offerId").value;
  var cost = document.getElementById("cost").value;
  var validityType = document.getElementById("validityType").value; //nahi
  var pricePoint = document.getElementById("pricePoint").value; //nahi
  var validity = document.getElementById("validity").value; //nahi
  var lifecycle = document.getElementById("lifeCycleId").value; //nahi
  var price = document.getElementById("price").value;
  var desc = document.getElementById("offerDescription").value;

  if (offerId == "") {
    return "Enter OFFER ID";
  }

  if (desc == "") return "Enter offer Description";

  var reg = new RegExp("^[0-9]+$");
  if (!reg.test(offerId)) {
    return "Only Numbers allowed";
  }
  return null;
}

window.onlyNumberKey = (evt) => {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
};
