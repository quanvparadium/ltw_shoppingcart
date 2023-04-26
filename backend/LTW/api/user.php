<?php

header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class Database
{
	private $servername = 'mysql';
	private $username = 'php';
	private $password = 'php_123456';
	private $dbname = 'shop';
	public function __construct()
	{
	}

	public function connect()
	{
		$conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

		return $conn;
	}
}


class User
{
	public $database;

	public function __construct()
	{
		$this->database = new Database();
	}

	function get_all_customers()
	{
		$conn = $this->database->connect();
		$data = $conn->query("select * from user where role='cus'");

		$customers = [];
		while ($row = $data->fetch_assoc()) {
			$customers[] = $row;
		}

		header('Content-Type: application/json');
		echo json_encode($customers);
		$conn->close();
	}

	function get_all_admins()
	{
		$conn = $this->database->connect();
		$data = $conn->query("select * from user where role='ad'");

		$admins = array();
		while ($row = $data->fetch_assoc()) {
			$admins[] = $row;
		}

		$conn->close();
		return $admins;
	}

	function get_user_by_username($un)
	{
		$conn = $this->database->connect();
		$data = $conn->query("select * from user where username='{$un}'");
		$user = $data->fetch_assoc();
		$conn->close();
		return $user;
	}

	function login($un, $pw)
	{
		$conn = $this->database->connect();
		$data = $conn->query("select * from user where username='{$un}' and password='{$pw}'");

		$user = $data->fetch_assoc();
		if (!isset($user)) {
			return ['id' => '-1'];
		}

		if ($user['role'] == 'ad') {
			$data1 = $conn->query("select start_date from admin where ad_id={$user['user_id']}");
			$data1 = $data1->fetch_assoc();
			$user = array_merge($user, $data1);
		} else {
			$data1 = $conn->query("select point from customer where cus_id={$user['user_id']}");
			$data1 = $data1->fetch_assoc();
			$user = array_merge($user, $data1);
		}

		$conn->close();
		return $user;
	}

	function sign_up($username, $password, $name, $email, $address)
	{
		$conn = $this->database->connect();
		// check duplicate username
		$id_query = $conn->query("select user_id as id from user where username='{$username}'");

		if ($id_query->num_rows > 0) {
			echo $id_query->fetch_assoc();
			http_response_code(404);
			echo json_encode(array("message" => "Username has existed."));
		} else {
			$result = $conn->query("insert into user (username, password, name, address, role) values 
			('{$username}','{$password}','{$name}','{$address}','cus') ");

			$conn->close();

			// Return the data as JSON with a 200 status code
			header('Content-Type: application/json');
			http_response_code(200);
			echo json_encode(array("message" => "Success!"));
		}
	}

	function alter_user($username, $password, $name, $email, $address)
	{
		$conn = $this->database->connect();
		// check duplicate username

		$conn->query("update user 
			set 
				password = '{$password}', 
				name = '{$name}', 
				address = '{$address}' where username = '{$username}'");

		$data = $conn->query("select * from user where username = '{$username}'");
		return $data;
	}
}

$user = new User();
$action = $_GET['action'] ?? '';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	$username = $_POST['username'];
	$name = $_POST['name'];
	$password = $_POST['password'];
	$address = $_POST['address'];
	$email = $_POST['email'];

	$user->sign_up($username, $password, $name, $email, $address);
}
else if ($action == 'read_all') {
	$type = $_GET['type'] ?? '';
	if ($type == 'ad') {
		echo json_encode($user->get_all_admins());
		return;
	} else if ($type == 'cus') {
		$user->get_all_customers();
		return;
	}
} elseif ($action == 'login') {
	$username = $_POST['username'];
	$password = $_POST['password'];

	echo json_encode(($user->login($username, $password)));
} elseif ($action == 'sign_up') {
	$username = $_POST['username'];
	$name = $_POST['name'];
	$password = $_POST['password'];
	$address = $_POST['address'];
	$email = $_POST['email'];

	$user->sign_up($username, $password, $name, $email, $address);
} else if ($action == 'read') {
	$username = $_POST['username'];
	echo json_encode(($user->get_user_by_username($username)));
} else if ($action == 'alter') {
	$username = $_POST['username'];
	$name = $_POST['name'];
	$password = $_POST['password'];
	$address = $_POST['address'];
	$email = $_POST['email'];

	echo json_encode(($user->alter_user($username, $password, $name, $email, $address)));
}
