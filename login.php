<?php
$username = "your_username";
$password = "your_password";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if ($_POST["username"] == $username && $_POST["password"] == $password) {
		header("Location: timetable.html");
		exit;
	} else {
		$error_message = "Invalid username or password";
	}
}
?>
