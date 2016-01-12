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
     var out = "<table id='table_certified_companies' class='table table-bordered table-striped'><th>Name</th><th>Address</th><th>City</th><th>Country</th><th>Scope</th><th>Standard</th><th>Status</th><th>Initial Certification Date</th><th>Certificate Expiry Date</th>";

     for(i = 0; i < arr.length; i++) {
         out += "<tr id='" + i + "'><td id='name_" + i + "'>" +
         arr[i].Name +
         "</td><td>" +
         arr[i].Address +
         "</td><td>" +
         arr[i].City +
         "</td><td>" +
         arr[i].Country +
         "</td><td id='scope_" + i + "'>" +
         arr[i].Scope +
         "</td><td id='standard_" + i + "'>" +
         arr[i].Standard +
         "</td><td id='status_" + i + "'>" +
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
     var out = "<option>All</option>";

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
     var out = "<option>All</option>";

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
     var out = "<option>All</option>";

     for(i = 0; i < arr.length; i++) {
         out += "<option>" +
         arr[i].Name +
         "</option>";
     }
     document.getElementById("status_list").innerHTML = out;
 }

function search_name(){
    document.getElementById("scopes_list").selectedIndex = 0;
    document.getElementById("standard_list").selectedIndex = 0;
    document.getElementById("status_list").selectedIndex = 0;
    var i;
    var table_certified_companies = document.getElementById("table_certified_companies");
    for(i = 0; i < table_certified_companies.rows.length; i++) {
        var name = document.getElementById("name_" + i).innerHTML;
        var name_search = document.getElementById("search_name").value;
        if(name.toLowerCase().indexOf(name_search.toLowerCase()) > -1){
            document.getElementById(i).style.display = '';
        }else{
            document.getElementById(i).style.display = 'none';
        }
    }
}

function search_scope(){
    document.getElementById("standard_list").selectedIndex = 0;
    document.getElementById("status_list").selectedIndex = 0;
    var i;
    var table_certified_companies = document.getElementById("table_certified_companies");
    for(i = 0; i < table_certified_companies.rows.length; i++) {
        var scope = document.getElementById("scope_" + i).innerHTML;
        var selected_scope = document.getElementById( "scopes_list" ).options[document.getElementById("scopes_list").selectedIndex].value;
        if(selected_scope == "All"){
            document.getElementById(i).style.display = '';
        }else if(scope != selected_scope){
            document.getElementById(i).style.display = 'none';
        }else{
            document.getElementById(i).style.display = '';
        }

    }
}

function search_standard(){
    document.getElementById("scopes_list").selectedIndex = 0;
    document.getElementById("status_list").selectedIndex = 0;
    var i;
    var table_certified_companies = document.getElementById("table_certified_companies");
    for(i = 0; i < table_certified_companies.rows.length; i++) {
        var standard = document.getElementById("standard_" + i).innerHTML;
        var selected_standard = document.getElementById( "standard_list" ).options[document.getElementById("standard_list").selectedIndex].value;
        if(selected_standard == "All"){
            document.getElementById(i).style.display = '';
        }else if(standard != selected_standard){
            document.getElementById(i).style.display = 'none';
        }else{
            document.getElementById(i).style.display = '';
        }

    }
}

function search_status(){
    document.getElementById("scopes_list").selectedIndex = 0;
    document.getElementById("standard_list").selectedIndex = 0;
    var i;
    var table_certified_companies = document.getElementById("table_certified_companies");
    for(i = 0; i < table_certified_companies.rows.length; i++) {
        var status = document.getElementById("status_" + i).innerHTML;
        var selected_status = document.getElementById( "status_list" ).options[document.getElementById("status_list").selectedIndex].value;
        if(selected_status == "All"){
            document.getElementById(i).style.display = '';
        }else if(status != selected_status){
            document.getElementById(i).style.display = 'none';
        }else{
            document.getElementById(i).style.display = '';
        }

    }
}
