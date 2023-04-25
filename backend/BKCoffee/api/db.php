<?php

// $host = "mysql";
// $username = "php";
// $password = "php_123456";
$dbname = "shop";

$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error());
}
