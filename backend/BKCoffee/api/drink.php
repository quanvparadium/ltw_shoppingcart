<?php

use Drink as GlobalDrink;

require_once __DIR__ . '/../database/database.php';
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class Drink
{
	private $database;

	public function __construct()
	{
		$this->database = new Database();
	}

	public function get_drinks()
	{
		$conn = $this->database->connect();
		$data = $conn->query('select * from drink');
		$conn->close();

		$products = [];
		while ($row = $data->fetch_object()) {
			$products[] = $row;
		}

		return $products;
	}

	public function get_drink_by_id($id)
	{
		$conn = $this->database->connect();
		$data = $conn->query("select * from drink where drink_id={$id}");
		$conn->close();

		$product = $data->fetch_object();
		return $product;
	}

	public function add_drink($name, $price, $type, $image = "", $description = "")
	{
		$conn = $this->database->connect();

		$conn->query("insert into drink 
				(name, price, type, image, description) values 
				('{$name}',
				{$price},
				'{$type}',
				'{$image}',
				'{$description})'");
		$conn->close();
	}

	public function update_drink($id, $name, $price, $type, $image = "", $description = "")
	{
		$conn = $this->database->connect();

		$conn->query("update drink set 
				name='{$name}',
				price={$price},
				type='{$type}',
				image='{$image}',
				description='{$description}'
			where drink_id={$id}");

		$conn->close();
	}

	public function remove_drink($id)
	{
		$conn = $this->database->connect();
		$conn->query("delete from drink where drink_id={$id}");
		$conn->close();
	}
}

$drink = new GlobalDrink();
$action = $_GET['action'] ?? '';

if ($action == 'read') {
	if (isset($_GET['id'])) {
		echo json_encode(($drink->get_drink_by_id($_GET['id'])));
	} else {
		echo json_encode($drink->get_drinks());
	}
} else if ($action == 'create') {
} else if ($action == 'update') {
} else if ($action == 'delete') {
}
