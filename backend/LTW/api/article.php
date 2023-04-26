<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

require_once './db.php';
require_once  'database.php';

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
} else if ($_SERVER['REQUEST_METHOD'] == "POST") {
	if (isset($_POST['action']) && $_POST['action'] == 'update') {
		// Get the request body as JSON and decode it into an associative array

		// Validate the request body
		if (!isset($_POST['id']) || !isset($_POST['title']) || !isset($_POST['content']) || !isset($_POST['date']) || !isset($_POST['image'])) {
			http_response_code(400);
			echo json_encode(['error' => 'Missing required fields']);
			exit();
		}

		// Sanitize the input
		$id = intval($_POST['id']);
		$title = htmlspecialchars($_POST['title']);
		$content = htmlspecialchars($_POST['content']);
		$date = htmlspecialchars($_POST['date']);
		$image = $_POST['image'];

		// Update the article in the database
		$query = "UPDATE article SET title ='$title', content ='$content', date ='$date', image='$image' WHERE article_id=$id;";
		$result = $conn->query($query);

		// Check if any rows were affected
		if (!$result) {
			http_response_code(404);
			echo json_encode(['error' => 'Article not found']);
			exit();
		}

		// Return the updated article
		header('Content-Type: application/json');
		http_response_code(200);
		echo json_encode(array("message" => "Success!"));
	}
	if (isset($_POST['action']) && $_POST['action'] == 'delete') {
		// Get the request body as JSON and decode it into an associative array

		// Validate the request body
		if (!isset($_POST['id'])) {
			http_response_code(400);
			echo json_encode(['error' => 'Missing required fields']);
			exit();
		}

		// Sanitize the input
		$id = intval($_POST['id']);

		// Update the article in the database
		$query = "DELETE FROM article where article_id = $id;";
		$result = $conn->query($query);

		// Check if any rows were affected
		if (!$result) {
			http_response_code(404);
			echo json_encode(['error' => 'Article not found']);
			exit();
		}

		// Return the updated article
		header('Content-Type: application/json');
		http_response_code(200);
		echo json_encode(array("message" => "Success!"));
	} else {
		// Validate the request body
		if (!isset($_POST['title']) || !isset($_POST['content']) || !isset($_POST['date']) || !isset($_POST['image'])) {
			http_response_code(400);
			echo json_encode(['error' => 'Missing required fields']);
			exit();
		}

		// Sanitize the input
		$title = htmlspecialchars($_POST['title']);
		$content = htmlspecialchars($_POST['content']);
		$date = htmlspecialchars($_POST['date']);
		$adID = htmlspecialchars($_POST['ad_id']);
		$image = htmlspecialchars($_POST['image']);

		// Insert the new article into the database
		$stmt = $conn->prepare('INSERT INTO article (title, content, date, ad_id, image) VALUES (?, ?, ?, ?, ?)');
		$stmt->bind_param('sssis', $title, $content, $date, $adID, $image);
		$stmt->execute();

		// Return the newly created article
		header('Content-Type: application/json');
		http_response_code(200);
		echo json_encode(array("message" => "Success!"));
	}
}
