function display_all(){
	display_certified_companies();
	display_scope();
	display_standard();
	display_status();
}

function display_certified_companies(){
	var xmlhttp = new XMLHttpRequest();
	var url = "edelcert.php?get_list_certified_companies";

	xmlhttp.onreadystatechange=function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        json_companies_to_table(xmlhttp.responseText);
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function json_companies_to_table(response) {
     var arr = JSON.parse(response);
     var i;
     var out = "<table class='table table-bordered table-striped'><th>Name</th><th>Address</th><th>City</th><th>Country</th><th>Scope</th><th>Standard</th><th>Status</th><th>Initial Certification Date</th><th>Certificate Expiry Date</th>";

     for(i = 0; i < arr.length; i++) {
         out += "<tr><td>" +
         arr[i].Name +
         "</td><td>" +
         arr[i].Address +
         "</td><td>" +
         arr[i].City +
         "</td><td>" +
         arr[i].Country +
         "</td><td>" +
         arr[i].Scope +
         "</td><td>" +
         arr[i].Standard +
         "</td><td>" +
         arr[i].Status +
         "</td><td>" +
         arr[i].Initial_Certification_Date +
         "</td><td>" +
         arr[i].Certificate_Expiry_Date +
         "</td></tr>";
     }
     out += "</table>";
     document.getElementById("tableau_entr_cert").innerHTML = out;
 }

function display_scope(){
 	var xmlhttp = new XMLHttpRequest();
	var url = "edelcert.php?get_list_scopes";

	xmlhttp.onreadystatechange=function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        json_scope_to_select(xmlhttp.responseText);
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
 }

function json_scope_to_select(response){
 	var arr = JSON.parse(response);
     var i;
     var out = "";

     for(i = 0; i < arr.length; i++) {
         out += "<option>" +
         arr[i].PK_Scope + " - " + arr[i].Name +
         "</option>";
     }
     document.getElementById("scopes_list").innerHTML = out;
 }

function display_standard(){
 	var xmlhttp = new XMLHttpRequest();
	var url = "edelcert.php?get_list_standard";

	xmlhttp.onreadystatechange=function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        json_standard_to_select(xmlhttp.responseText);
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
 }

function json_standard_to_select(response){
 	var arr = JSON.parse(response);
     var i;
     var out = "";

     for(i = 0; i < arr.length; i++) {
         out += "<option>" +
         arr[i].Name +
         "</option>";
     }
     document.getElementById("standard_list").innerHTML = out;
 }

function display_status(){
 	var xmlhttp = new XMLHttpRequest();
	var url = "edelcert.php?get_list_status";

	xmlhttp.onreadystatechange=function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        json_status_to_select(xmlhttp.responseText);
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
 }

function json_status_to_select(response){
 	var arr = JSON.parse(response);
     var i;
     var out = "";

     for(i = 0; i < arr.length; i++) {
         out += "<option>" +
         arr[i].Name +
         "</option>";
     }
     document.getElementById("status_list").innerHTML = out;
 }