$(document).ready(function () {
	console.log("PHOME");
	
	var secondnav=document.getElementById("nav2");
	secondnav.style.visibility = "hidden";
	secondnav.style.display = "none";
	$("#offerMgmt").click(function(e){
		toggle(secondnav);
	});
	function toggle(x) {
    	if (x.style.visibility == "hidden") {
			x.style.visibility = "visible";
			x.style.display = "block";
    	} else {
			x.style.visibility = "hidden";
			x.style.display = "none";
			  
    	}
  }})
;
