<?php
require './db.php';

$res = $conn->query("SELECT * from books LIMIT 20;");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization");

if ($_SERVER['REQUEST_METHOD'] == "GET") {
    if ($res->num_rows > 0) {
        $products = array();

        while ($row = $res->fetch_assoc()) {
            $products[] = $row;
        }

        // Return the data as JSON with a 200 status code
        header('Content-Type: application/json');
        http_response_code(200);
        echo json_encode($products);
    }else {
        // Close the connection
        // Return an empty array as JSON with a 200 status code
        header('Content-Type: application/json');
        http_response_code(200);
        echo json_encode(array());
    }
}