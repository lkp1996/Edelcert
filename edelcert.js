var xmlhttp = new XMLHttpRequest();
var url = "edelcert.php";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

 function myFunction(response) {
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