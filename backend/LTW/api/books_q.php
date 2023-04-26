<?php

header('Content-type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization");
class Database
{
    private $servername = 'mysql';
    private $username = 'php';
    private $password = 'php_123456';
    private $dbname = 'shop';
    public function __construct(){}

    public function connect()
    {
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        return $conn;
    }
}

class Book 
{
    private $database;

    public function __construct(){
        $this->database = new Database();
    }

	public function get_books()
	{
		$conn = $this->database->connect();
		$data = $conn->query('select * from books');
		$conn->close();

		$products = [];
		while ($row = $data->fetch_object()) {
			$products[] = $row;
		}

		return $products;
	}    

    public function get_book_by_id($id) {
        $conn = $this->database->connect();
        $data = $conn->query("SELECT * FROM books WHERE book_id = {$id}");
        $conn->close();

        $product = $data->fetch_object();
        return $product;
    }

    public function add_book($book_id, $name, $author_name, $short_description, $price, $discount, $discount_rate, $original_price, $thumbnail) {
        $conn = $this->database->connect();
        $conn->query("INSERT INTO `books` (book_id, name, author_name, short_description, price, discount, discount_rate, original_price, thumbnail) values
            ('{$book_id}','{$name}', '{$author_name}', '{$short_description}', '{$price}', '{$discount}', '{$discount_rate}', '{$original_price}', '{$thumbnail}')"
        );


        $conn->close();
    }
    public function update_book($book_id, $name, $author_name, $short_description, $price, $discount, $discount_rate, $original_price, $thumbnail)
    {
        $conn = $this->database->connect();
        $conn->query("update books set
            name='{$name}',
            author_name='{$author_name}',
            short_description='{$short_description}',
            price='{$price}',
            discount='{$discount}',
            discount_rate='{$discount_rate}',
            original_price='{$original_price}',
            thumbnail='{$thumbnail}',
        where book_id={$book_id}");
        $conn->close();

    }

    public function remove_book($id)
	{
		$conn = $this->database->connect();
		$conn->query("delete from books where book_id={$id}");
		$conn->close();
	}
}

$book = new Book();

$action = $_GET['action'];
if ($action == "create") {
    echo $_GET['thumbnail'];
    if ($_SERVER['REQUEST_METHOD'] == 'GET'){
        $id = $_GET['book_id'];
        $name = $_GET['name'];
        $author_name = $_GET['author_name'];
        $short_description = $_GET['short_description'];
        $price = $_GET['price'];
        $discount = $_GET['discount'];
        $discount_rate = $_GET['discount_rate'];
        $original_price = $_GET['original_price'];
        $thumbnail = $_GET['thumbnail'];
	
        $book->add_book($id, $name, $author_name, $short_description, $price, $discount, $discount_rate, $original_price, $thumbnail);
    }        
}
else if ($action == "read") {
    if (isset($_GET['id'])) {
        echo json_encode($book->get_book_by_id($_GET['id']));
    }
    else {
        echo json_encode($book->get_books());
    }
}
else if ($action == "update") {
    $id = $_GET['book_id'];
    $name = $_GET['name'];
    $author_name = $_GET['author_name'];
    $short_description = $_GET['short_description'];
    $price = $_GET['price'];
    $discount = $_GET['discount'];
    $discount_rate = $_GET['discount_rate'];
    $original_price = $_GET['original_price'];
    $thumbnail = $_GET['thumbnail'];

    $book->update_book($id, $name, $author_name, $short_description, $price, $discount, $discount_rate, $original_price, $thumbnail);    
}
else if ($action == "delete") {
    if (isset($_GET['book_id'])){
        $book->remove_book($_GET['book_id']);
    }
}
?>


