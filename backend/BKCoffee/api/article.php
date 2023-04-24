<?php

require_once __DIR__ . '/../database/database.php';
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class Article
{
	private $database;

	public function __construct()
	{
		$this->database = new Database();
	}

	public function get_articles()
	{
		$conn = $this->database->connect();
		$data = $conn->query('select * from article');
		$conn->close();

		$products = [];
		while ($row = $data->fetch_assoc()) {
			$products[] = $row;
		}

		return $products;
	}
}

$aritcle = new Article();
$action = $_GET['action'] ?? '';

if ($action == 'read') {
	echo json_encode(($aritcle->get_articles()));
} else if ($action == 'create') {
} else if ($action == 'update') {
} else if ($action == 'delete') {
}
