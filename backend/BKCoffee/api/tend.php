<?php

header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class Database
{
    private $servername = 'localhost';
    private $username = 'root';
    private $password = '';
    private $dbname = 'bk_book';
    public function __construct(){}

    public function connect()
    {
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        return $conn;
    }
}

function my_sort($a, $b) {
    $price_first = (float)$a->{'price'};
    $price_second = (float)$b->{'price'};
    if ($price_first == $price_second) return 0;
    return ($price_first < $price_second) ? -1 : 1;
}

class Show
{
    private $database;

    public function __construct() {
        $this->database = new Database();
    }

    public function get_all_products() {
        $conn = $this->database->connect();
        $data = $conn->query("SELECT * FROM book");
        
        $products = [];
        while($row = $data->fetch_object()){
            $products[] = $row;
        }
        $json_data = $products;
        
        $conn->close();
        return $json_data;
    }

    public function sort_by_price($low_to_high = true){
        // $book_data = array_slice($this->get_all_products(), 0, 10);
        $book_data = $this->get_all_products();
        usort($book_data, "my_sort");
        if ($low_to_high == false) {
            $book_data = array_reverse($book_data, true);
        }
        echo json_encode($book_data);
        return $book_data;
    }
}

$show = new Show();
$show->sort_by_price();
?>