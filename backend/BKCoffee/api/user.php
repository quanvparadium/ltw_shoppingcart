<?php
require_once __DIR__ . '/../database/database.php';
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

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
			$data1 = $conn->query("select point from customer where cus_id={$row['user_id']}");
			$data1 = $data1->fetch_assoc();

			if (isset($data1)) {
				$customers[] = array_merge($row, $data1);
			}
		}

		$conn->close();
		return $customers;
	}

	function get_all_admins()
	{
		$conn = $this->database->connect();
		$data = $conn->query("select * from user where role='ad'");

		$admins = [];
		while ($row = $data->fetch_assoc()) {
			$data1 = $conn->query("select start_date from admin where ad_id={$row['user_id']}");
			$data1 = $data1->fetch_assoc();
			if (isset($data1)) {
				$admins[] = array_merge($row, $data1);
			}
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
		if (isset($id_query->fetch_assoc()['id'])) {
			return ["status" => "DUP_USERNAME"];
		}

		$conn->query("insert into user (username, password, name, address, role) values 
			('{$username}','{$password}','{$name}','{$address}','cus') ");

		$id_query = $conn->query("select max(user_id) as id from user");
		$id = $id_query->fetch_assoc()['id'];

		$conn->query("insert into customer values ({$id}, 0) ");

		$conn->close();
		return ['status' => 'OK'];
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

if ($action == 'read_all') {
	$type = $_GET['type'] ?? '';
	if ($type == 'ad') {
		echo json_encode($user->get_all_admins());
	} else if ($type == 'cus') {
		echo json_encode($user->get_all_customers());
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

	echo json_encode(($user->sign_up($username, $password, $name, $email, $address)));
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
