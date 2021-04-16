<?php

if(empty($_POST["name"]) || empty($_POST["phone"]) || empty($_POST["email"]) || empty($_POST["budget"]) ){
	header('Location: https://mrugarchana.in/?form=blank'); 
}else{

	$source = $_POST["source"]=='colombia'?26:10;

	$data = 'Name: '.$_POST["name"].', Phone: '.$_POST["phone"].', Email:'.$_POST["email"].', budget: '.$_POST["budget"].', source: '.$source;
	$fp = fopen('data.txt', 'a');
	fwrite($fp, $data);
	fclose($fp);

	$name= filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$phone= filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$email= filter_var($_POST["email"], FILTER_SANITIZE_STRING);
	$budget= filter_var($_POST["budget"], FILTER_SANITIZE_STRING);
	$source = $_POST["source"]=='colombia'?26:10;
	$ip= $_SERVER['REMOTE_ADDR'];
		
	$servername = "148.66.136.58";
	$username = "plinthstone_user";
	$password = "plinthstone@123";
	$dbname = "plinthstonelms";

	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$sql = "INSERT INTO leads (first_name, last_name, contact, email, city, state, location, configuration, project, campaign, source, interested, remarks, status, junk, visited, closed)
	VALUES ('$name','','$phone', '$email', 0,0,0, '$budget', 1, 5, '$source',1,0,1,0,0,0)";

	if ($conn->query($sql) === TRUE) {
		header('Location: https://mrugarchana.in/thank-you'); 
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();

	
}
?>