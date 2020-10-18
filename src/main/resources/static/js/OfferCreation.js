import { addOffer, deleteOffer, getOffers, offerPriceById, getPlans, addPlan } from "./api.js";

import {inputValidations} from "./validations.js"
var myTable;
var mRow = 1;
var mCol = 1;
var count=1;

function getCookieValue(a) {
  var b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}


if (getCookieValue("msession") == "true") { 
$(document).ready(function () {
  BindItemTable();

  var tomorrow = new Date();
tomorrow.setDate(new Date().getDate()+1);
  var today = tomorrow.toISOString().split('T')[0];
  console.log(today);
document.getElementsByName("offerStartDate")[0].setAttribute('min', today);

disableBundledElements();
// $('#offerStartDate').datetimepicker();

$('#offerExpiryDate').click(function () {
  var date = document.getElementById("offerStartDate").value;
  var startDate = new Date(date);
   console.log(startDate);
  startDate.setDate(startDate.getDate()+1);
    var today = startDate.toISOString().split('T')[0];
    console.log(today);
  document.getElementsByName("offerExpiryDate")[0].setAttribute('min', today);
})

  $("#addrow").click(function (e) {
    console.log("clickk");
    if (document.getElementById("offerId").value == "")
      alert("Please fill the offer id first");
    else {
      // rowCounter++;
      PopulateItemsTable();
      $(".dataTables_length").addClass("bs-select");
      getPlans().then(res=>showPlan(res))
.catch(err=>console.log(err))
    }
  });

  // document.getElementById("form").style.visibility = "hidden";
  $("#mainNavbar").click(function (e) {
    var x = document.getElementById("form");
    toggle(x);
  });

  $("#mainNavbar2").click(function (e) {
    var x = document.getElementById("form2");
    toggle(x);
  });

  function toggle(x) {
    if (x.style.visibility == "hidden") {
      x.style.visibility = "visible";
      x.style.display = "block";
    } else {
      x.style.visibility = "hidden";
      x.style.display = "none";
    }
  }

  $("#individual").click(function (e) {
    document.getElementById("cost").disabled = true;
    document.getElementById("validityType").disabled = false;
    document.getElementById("pricePoint").disabled = false;
    document.getElementById("validity").disabled = false;
    document.getElementById("lifeCycleId").disabled = false;
    document.getElementById("price").disabled = false;
    document.getElementById("nextRenewalOffer").disabled = false;
  });

  $("#bundled").click(function (e) {
    disableBundledElements();
  });


  $("#lifeCycleId").click(function (e) {
    var option = document.getElementById("lifeCycleId").value;
    var vt = document.getElementById("validityType");
    var v = document.getElementById("validity");

    vt.disabled = true;
    v.disabled = true;

    if (option == "CUT1 (20 Min)") {
      vt.value = "MM";
      v.value = "20";
    } else if (option == "CUT2 (30 Weekly)") {
      vt.value = "WW";
      v.value = "30";
    } else if (option == "CUT3 (30 Min)") {
      vt.value = "MM";
      v.value = "30";
    } else if (option == "DEF _LS (20 Days)") {
      vt.value = "DD";
      v.value = "20";
    } else {
      vt.disabled = false;
      v.disabled = false;
      vt.value = "";
      v.value = "";
    }
  });

  $("#pricePoint").click(function (e) {
    var option = document.getElementById("pricePoint").value;
    var p = document.getElementById("price");

    p.disabled = true;

    if (option == "FULL_TEST( INR 100 )") {
      p.value = "100";
    } else if (option == "OP( INR 100 )") {
      p.value = "100";
    } else if (option == "T12( INR 20 )") {
      p.value = "20";
    } else {
      p.disabled = false;
      p.value = "";
    }
  });

  $("#submitOffer").click(function (e) {
    e.preventDefault();
    var msg = inputValidations();
    if( msg != null) {
      alert(msg)
    }

    else {
    var offerType, autoRenewal, nextRenewalOfferType, nextRenewalOffer;
    var offerId = document.getElementById("offerId").value;
    var offerDesc = document.getElementById("offerDescription").value;
    var offerStartDate = document.getElementById("offerStartDate").value;
    var offerExpiryDate = document.getElementById("offerExpiryDate").value;
    var lifeCycleId = document.getElementById("lifeCycleId").value;
    var validity = document.getElementById("validity").value;
    var validityType = document.getElementById("validityType").value;
    var pricePoint = document.getElementById("pricePoint").value;
    var price = document.getElementById("price").value;
    document.getElementById("lifeCycleId").click();

    if (document.getElementById("yesAuto").checked) {
      autoRenewal = document.getElementById("yesAuto").value;
    } else {
      autoRenewal = document.getElementById("noAuto").value;
    }
    if (document.getElementById("individual").checked) {
      offerType = document.getElementById("individual").value;
    } else {
      offerType = document.getElementById("bundled").value;
    }
    if (document.getElementById("bundledRenew").checked) {
      nextRenewalOfferType = document.getElementById("bundledRenew").value;
    } else {
      nextRenewalOfferType = document.getElementById("individualRenew").value;
    }

    var nextRenewalOffer = document.getElementById("nextRenewalOffer").value;
    var sendNotification;

    if (document.getElementById("sendNotificationsYes").checked) {
      sendNotification = document.getElementById("sendNotificationsYes").value;
    } else {
      sendNotification = document.getElementById("sendNotificationsNo").value;
    }

    var jsonObj = {
      offerType: offerType,
      offerId: offerId,
      offerDesc: offerDesc,
      startDate: offerStartDate,
      endDate: offerExpiryDate,
      lifeCycleId: lifeCycleId,
      pricePoint: pricePoint,
      autoRenewal: autoRenewal,
      nextRenewalOffer: nextRenewalOffer,
      offerPlan: price,
      renewalBundleType: nextRenewalOfferType,
      sendNotification: sendNotification,
    };

    //console.log(jsonObj);
    addOffer(jsonObj);
  }
  });

  getOffers()
    .then((res) => {
      show(res);
      console.log(res);
    })
    .catch((err) => console.log(err));
  // console.log(offersJSON);

  function show(data) {
    data.forEach((row) => {
      $("#nextRenewalOffer").append(
        `<option value=${row.offerDesc}>${row.offerDesc}</option>`
      );
    });
  }
});

function showPlan(data) {
    data.forEach((row) => {
      var id = (mRow-1).toString()+(3).toString()
      console.log(id);
      $("#"+ id).append(
        `<option value=${row.planId}>${row.planId}</option>`
      );
    });
  }

function BindItemTable() {
  myTable = $("#dtBasicExample").DataTable({
    deferRender: true,
    paging: true,
    lengthChange: true,
    searching: true,
    ordering: true,
    info: true,
    autoWidth: false,
    sDom: "lfrtip",
    "order": [[ 0, "asc" ]]
  });
}



function PopulateItemsTable() {
  var response = [1];
  var result = response.map(function (item) {
    var result = [];
    result.push(
      // `<button onclick="deleteRow(this)"><i class="fa fa-trash pointer" aria-hidden="true"></i></button>`
      `<p>${count}.</p>`
    );
    count++;
    mCol++;
    result.push(`<p id="${mRow.toString()+mCol.toString()}"> ${document.getElementById("offerId").value} </p>`);
    mCol++;
    result.push(`<select name="plans" id="${mRow.toString()+mCol.toString()}">
      </select>`);
      mCol++;
    result.push(`<select name="order" id="${mRow.toString() + mCol.toString()}">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        </select>`);
        mCol++;
    result.push(
      `<button id="${mRow.toString()+mCol.toString()}" value="${mRow+mCol}" onclick="savePlan(this)"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>`
    );
    mCol=1;
    mRow++;
    return result;
  });
  //       });
  
  myTable.rows.add(result);
  myTable.draw();
  //     },
  //     failure: function () {
  //       $("#tblItems").append(
  //         " Error when fetching data please contact administrator"
  //       );
  //     },
  //   });
}

window.savePlan = (btn) => {
   var id = getId(btn);
   console.log(id);
   var offerId = document.getElementById(id+"2").innerHTML
   var planId = document.getElementById(id+"3").value
  var orderNo = document.getElementById(id+"4").value
  console.log(btn.id);
  var planOBJ = {
    offerId: offerId,
    planId: planId,
    orderNo: orderNo
  }
  addPlan(planOBJ).then(res=> {console.log("save plan button");
  document.getElementById(id+"5").disabled = true;
  })
  console.log(offerId + " " + planId + " " + orderNo);
}

window.deleteRow = (btn) => {
  // console.log("DELETE");
 //var row = btn.parentNode.parentNode;
  // row.parentNode.removeChild(row);
  //rowCounter--;
  //var myTable = $('#dtBasicExample').DataTable();
 // myTable.row( row ).hide();
//  $("#"+btn.id).parents("tr").hide();
// alert("BTN")
//  myTable.row(this).remove();
//   myTable.draw();
} 

function disableBundledElements() {
  document.getElementById("cost").disabled = false;
  document.getElementById("validityType").disabled = true;
  document.getElementById("pricePoint").disabled = true;
  document.getElementById("validity").disabled = true;
  document.getElementById("lifeCycleId").disabled = true;
  document.getElementById("price").disabled = true;
  document.getElementById("nextRenewalOffer").disabled = true;
}

function  getId(element) {
  var row = element.parentNode.parentNode.rowIndex;
  var col = element.parentNode.cellIndex;
  return row.toString();
}
}
else {
  window.location.href = "http://localhost:8080/";
}
