<?php

require_once  'database.php';
require_once './db.php';
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

		$products = [];
		while ($row = $data->fetch_assoc()) {
			$products[] = $row;
		}

		header('Content-Type: application/json');
		http_response_code(200);
		echo json_encode($products);
		$conn->close();
	}
}

$aritcle = new Article();
$action = $_GET['action'] ?? '';

if ($_SERVER['REQUEST_METHOD'] == "GET") {
	if (isset($_GET['id'])) {
		$article_id = $_GET['id'];

		$query = "select * from article where article_id=$article_id";
		$data = $conn->query($query);

		$item = $data->fetch_assoc();

		header('Content-Type: application/json');
		http_response_code(200);
		echo json_encode($item);
		$conn->close();
	} else {
		$aritcle->get_articles();
	}
} else if ($action == 'create') {
} else if ($action == 'update') {
} else if ($action == 'delete') {
}
