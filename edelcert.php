<?php

$hostnameDB = "localhost";
$database = "edelcert";
$usernameDB = "root";
$passwordDB = "root";

$connexion = new mysqli($hostnameDB, $usernameDB, $passwordDB, $database);

if ($connexion->connect_error) {

    die("Connection failed: " . $connexion->connect_error);

}else{

	$connexion->set_charset("utf8");
	$sql = "SELECT PK_Certified_Company, Certified_Company.Name, Address, City, Country, Scope.PK_Scope, Scope.Name AS 'Scope_Name', Standard.Name AS 'Standard', Status.Name AS 'Status', Initial_Certification_Date, Certificate_Expiry_Date FROM Certified_Company INNER JOIN Scope ON FK_Scope = PK_Scope INNER JOIN Standard ON FK_Standard = PK_Standard INNER JOIN Status ON FK_Status = PK_Status";
	$result = $connexion->query($sql);
	
	if ($result->num_rows > 0) {

		echo "[";

	    while($row = $result->fetch_assoc()) {

	        echo '{"Name" : "' . $row["Name"]. '", "Address" : "' . $row["Address"]. '", "City" : "' . $row["City"]. '", "Country" : "' . $row["Country"]. '", "Scope" : "' . $row["PK_Scope"]. ' - ' . $row["Scope_Name"] . '", "Standard" : "' . $row["Standard"]. '", "Status" : "' . $row["Status"]. '", "Initial_Certification_Date" : "' . $row["Initial_Certification_Date"]. '", "Certificate_Expiry_Date" : "' . $row["Certificate_Expiry_Date"] . '"}';
	        if($row["PK_Certified_Company"] < $result->num_rows){
	        	echo ", ";
	        }
	    }

	    echo "]";

	} else {

	    echo "0 results";

	}
}

$connexion->close();

?>