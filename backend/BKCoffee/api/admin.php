<?php
require_once __DIR__ . '/../database/database.php';
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class Admin
{
	public $database;

	public function __construct()
	{
		$this->database = new Database();
	}

	function perform_action($command)
	{
		$conn = $this->database->connect();
		$data = $conn->multi_query($command);

		if (mysqli_affected_rows($conn) == -1) {
			echo json_encode(["status" => "success"]);
		}
		echo json_encode(["status" => "success"]);

		$conn->close();
	}
}

$ad = new Admin();
$command = $_POST['command'];


$ad->perform_action($command);
