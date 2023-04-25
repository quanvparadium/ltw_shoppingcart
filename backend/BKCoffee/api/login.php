<?php
require './db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization");

// check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // retrieve the username and password from the POST data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // perform some validation on the input data
    if (empty($username) || empty($password)) {
        http_response_code(400);
        // die("Username and password are required.");
        echo $_POST["username"];
    }

    $result = $conn->query("select * from user where username='{$username}' and password='{$password}'");

    // check if the username and password are correct
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // return a success message with the token
        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode(array('status' => 'success', 'token' => $user));
    } else {

        // return an error message if the username or password is incorrect
        http_response_code(401);
        header('Content-Type: application/json');
        echo json_encode(array('status' => 'error', 'message' => 'Invalid username or password.'));
    }
} else {

    // return an error message if the request method is not POST
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(array('status' => 'error', 'message' => 'Method not allowed.'));
}
