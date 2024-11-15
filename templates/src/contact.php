<?php
$host = "ep-summer-flower-a2b7b5ts-pooler.eu-central-1.aws.neon.techt";
$username = "default";
$password = "dHgirx3F9BNC";
try 
{
    $conn = new PDO("mysql:host=$host;dbname=phptest", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}
// FORM SUBMITTED DATA CAN ACCESSED BY:
// 1. $_REQUEST : CAN BE USED FOR BOTH get AND post METHOD
// 2. $_POST : CAN BE USED ONLY FOR post METHOD
// 3. $_GET : CAN BE USED ONLY FOR get METHOD
if(isset($_POST['save_contact']))
{
	//print_r($_POST);
	$sql = "INSERT INTO contacts(name, email, message) VALUES('".addslashes($_POST['name'])."', '".addslashes($_POST['email'])."', '".addslashes($_POST['message'])."')";
	$conn->query($sql);
}

?>