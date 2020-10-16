import { addOffer, deleteOffer, getOffers, offerPriceById, getPlans, addPlan } from "./api.js";
var myTable;
var rowCounter = 0;
 
$(document).ready(function () {
  BindItemTable();

  $("#addrow").click(function (e) {
    console.log("clickk");
    if (document.getElementById("offerId").value == "")
      alert("Please fill the offer id first");
    else {
      rowCounter++;
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
    document.getElementById("cost").disabled = false;
    document.getElementById("validityType").disabled = true;
    document.getElementById("pricePoint").disabled = true;
    document.getElementById("validity").disabled = true;
    document.getElementById("lifeCycleId").disabled = true;
    document.getElementById("price").disabled = true;
    document.getElementById("nextRenewalOffer").disabled = true;
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
      $("#"+document.getElementById("offerId").value + rowCounter).append(
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
  });
}



function PopulateItemsTable() {
  //   $.ajax({
  //     type: "GET",
  //     url: "http://localhost:8080/api/getoffers",
  //     contentType: "application/json; charset=utf-8",
  //     dataType: "json",
  //     success: function (response) {
  //       console.log(response);
  //       // var jsonObject = JSON.stringify(response);
  var response = [1];
  var result = response.map(function (item) {
    var result = [];
    result.push(
      `<button onclick="deleteRow(this)"><i class="fa fa-trash pointer" aria-hidden="true"></i></button>`
    );
    result.push(document.getElementById("offerId").value);
    result.push(`<select name="plans" id="${document.getElementById("offerId").value + rowCounter}">
      </select>`);
    result.push(`<select name="order" id="order">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        </select>`);
    result.push(
      `<button id="${rowCounter}" value="${item.offerId}" onclick="savePlan()"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>`
    );
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

window.savePlan = () => {
  var offerId = document.getElementById("offerId").value
  var planId = document.getElementById(document.getElementById("offerId").value + rowCounter).value
  var orderNo = document.getElementById("order").value
  
  var planOBJ = {
    offerId: offerId,
    planId: planId,
    orderNo: orderNo
  }
  addPlan(planOBJ).then(res=> {console.log("save plan button");
  console.log(rowCounter.toString());
  document.getElementById(rowCounter.toString()).disabled = true;
  })
}

window.deleteRow = (btn) => {
  console.log("DELETE");
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  rowCounter--;
}
