<?php
require './db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization");

if ($_SERVER['REQUEST_METHOD'] == "GET") {
    if (isset($_GET['id'])) {
        $book_id = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);

        // Query the database for the book with the provided ID
        $query = "SELECT * FROM books WHERE book_id = $book_id";
        $result = $conn->query($query);

        // If a book was found, return its information
        if ($result && $result->num_rows > 0) {
            $book_info = $result->fetch_assoc();

            header('Content-Type: application/json');
            echo json_encode($book_info);
        }

        // Otherwise, return an error message
        else {
            http_response_code(404);
            echo json_encode(array("message" => "Book not found."));
        }
    } else {
        $offset = 0;
        if (isset($_GET["offset"])) {
            $offset = $_GET["offset"];
        }
        
        $query = "SELECT * from books";
        if (isset($_GET["type"])) {
            if ($_GET["type"] == "up") 
                $query = "$query ORDER BY price ASC";
            elseif ($_GET["type"] == "down")
                $query = "$query ORDER BY price DESC";
        }

        $query = "$query LIMIT 10 OFFSET $offset";


        $res = $conn->query($query);

        if ($res->num_rows > 0) {
            $products = array();

            while ($row = $res->fetch_assoc()) {
                $products[] = $row;
            }

            // Return the data as JSON with a 200 status code
            header('Content-Type: application/json');
            http_response_code(200);
            echo json_encode($products);
        } else {
            // Close the connection
            // Return an empty array as JSON with a 200 status code
            header('Content-Type: application/json');
            http_response_code(200);
            echo json_encode(array());
        }
    }
}
