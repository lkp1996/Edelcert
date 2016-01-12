<?php

$hostnameDB = "localhost";
$database = "incertit_edel";
$usernameDB = "root";
$passwordDB = "root";

$connexion = new mysqli($hostnameDB, $usernameDB, $passwordDB, $database);
$connexion->set_charset("utf8");

if ($connexion->connect_error) {

	die("Connection failed: " . $connexion->connect_error);

}else{

	if(isset($_GET["get_list_certified_companies"])){

		 $sql = "SELECT PK_Certified_Company, Certified_Company.Name, Address, City, Country, Scope.PK_Scope, Scope.Name AS 'Scope_Name', Standard.Name AS 'Standard', Status.Name AS 'Status', Initial_Certification_Date, Certificate_Expiry_Date FROM Certified_Company INNER JOIN Scope ON FK_Scope = PK_Scope INNER JOIN Standard ON FK_Standard = PK_Standard INNER JOIN Status ON FK_Status = PK_Status";
		 $result = $connexion->query($sql);
		
		 if ($result->num_rows > 0) {

		 	echo "[";

		 	$i = 0;
		    while($row = $result->fetch_assoc()) {

		    	$i += 1;
		         echo '{"Name" : "' . $row["Name"]. '", "Address" : "' . $row["Address"]. '", "City" : "' . $row["City"]. '", "Country" : "' . $row["Country"]. '", "Scope" : "' . $row["PK_Scope"]. ' - ' . $row["Scope_Name"] . '", "Standard" : "' . $row["Standard"]. '", "Status" : "' . $row["Status"]. '", "Initial_Certification_Date" : "' . $row["Initial_Certification_Date"]. '", "Certificate_Expiry_Date" : "' . $row["Certificate_Expiry_Date"] . '"}';
		        if($i < $result->num_rows){
		        	echo ", ";
		        }
		    }

		    echo "]";

		} else {

		    echo "0 results";

		}
	}elseif(isset($_GET["get_list_scopes"])){
		$sql2 = "SELECT * FROM Scope";
		$result2 = $connexion->query($sql2);
		if ($result2->num_rows > 0) {

		 	echo "[";

		 	$i = 0;
		     while($row = $result2->fetch_assoc()) {
		     	$i += 1;
		         echo '{"PK_Scope" : "' . $row["PK_Scope"]. '", "Name" : "' . $row["Name"] . '"}';
		        if($i < $result2->num_rows){
		        	echo ", ";
		        }
		    }

		    echo "]";

		} else {

		    echo "0 results";

		}
	}elseif(isset($_GET["get_list_standard"])){
		$sql3 = "SELECT Name FROM Standard";
		$result3 = $connexion->query($sql3);
		if ($result3->num_rows > 0) {

		 	echo "[";

		 	$i = 0;
		     while($row = $result3->fetch_assoc()) {
		     	$i += 1;
		         echo '{"Name" : "' . $row["Name"]. '"}';
		        if($i < $result3->num_rows){
		        	echo ", ";
		        }
		    }

		    echo "]";

		} else {

		    echo "0 results";

		}
	}elseif(isset($_GET["get_list_status"])){
		$sql4 = "SELECT Name FROM Status";
		$result4 = $connexion->query($sql4);
		if ($result4->num_rows > 0) {

		 	echo "[";

		 	$i = 0;
		     while($row = $result4->fetch_assoc()) {
		     	$i += 1;
		         echo '{"Name" : "' . $row["Name"]. '"}';
		        if($i < $result4->num_rows){
		        	echo ", ";
		        }
		    }

		    echo "]";

		} else {

		    echo "0 results";

		}
	}
}

$connexion->close();

?>