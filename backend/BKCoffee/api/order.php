<?php
require_once __DIR__ . '/../database/database.php';
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class Order
{
	public $database;

	public function __construct()
	{
		$this->database = new Database();
	}

	// function get_order_by_id($id)
	// {
	// 	$conn = $this->database->connect();
	// 	$data = $conn->query("select * from orders where order_id='{$id}'");
	// 	$conn->close();

	// 	$order =  $data->fetch_object();

	// 	return $order;
	// }

	// function get_order_by_user_id($id)
	// {
	// 	$conn = $this->database->connect();
	// 	$data = $conn->query("select * from orders where cus_id='{$id}'");
	// 	$conn->close();

	// 	$orders = [];
	// 	while ($row = $data->fetch_object()) {
	// 		$orders[] = $row;
	// 	}

	// 	return $orders;
	// }

	function get_drinks_by_order_id($id)
	{
		$conn = $this->database->connect();
		$data = $conn->query("select * from contains where order_id='{$id}'");


		$drinks = [];
		while ($row = $data->fetch_assoc()) {
			$data1 = $conn->query("select * from drink where drink_id='{$row['drink_id']}'");
			$data1 = $data1->fetch_assoc();
			$drinks[] = array_merge($row, $data1);
		}

		$conn->close();
		return $drinks;
	}

	function get_orders()
	{
		$conn = $this->database->connect();
		$data = $conn->query("select * from orders");
		$conn->close();

		$orders = [];
		while ($row = $data->fetch_object()) {
			$orders[] = $row;
		}

		return $orders;
	}

	function create_order()
	{
		$conn = $this->database->connect();
		$conn->query("insert into orders (status) values ('init')");
		$data = $conn->query("select max(order_id) from orders");
		$conn->close();

		$id = $data->fetch_object();
		return $id;
	}

	function add_to_order($drink_id, $order_id, $drink_count, $size, $topping)
	{
		$conn = $this->database->connect();
		$conn->query("insert into contains 
				(drink_id, order_id, drink_count, size, topping) values 
					({$drink_id},
					{$order_id}, 
					{$drink_count},
					'{$size}',
					'{$topping}')");
		$conn->close();
	}

	// public function update_order($id, $receiver_name, $address, $ship_fee, $cus_id, $topping, $size)
	// {
	// 	$conn = $this->database->connect();
	// 	$data =
	// 		$conn->query("update orders set 
	// 			receiver_name='{$receiver_name}', 
	// 			address='{$address}', 
	// 			ship_fee={$ship_fee}, 
	// 			cus_id={$cus_id}, 
	// 			topping='{$topping}',
	// 			size='{$size}'
	// 		where order_id={$id}");

	// 	$conn->close();
	// 	$products = [];
	// 	while ($row = $data->fetch_object()) {
	// 		$products[] = $row;
	// 	}

	// 	return $products;
	// }

	public function remove_order($id)
	{
		$conn = $this->database->connect();
		$conn->query("delete from orders where order_id={$id}");
		$conn->close();
	}

	public function remove_drink_from_order($drink_id, $order_id)
	{
		$conn = $this->database->connect();
		$conn->query("delete from contains where drink_id={$drink_id} and order_id={$order_id}");
		$conn->close();
	}
}

$order = new Order();
$action = $_GET['action'] ?? '';

if ($action == 'read') {
	// if (isset($_GET['id'])) {
	// 	echo json_encode(($order->get_order_by_id($_GET['id'])));
	// } elseif (isset($_GET['user_id'])) {
	// 	echo json_encode(($order->get_order_by_user_id($_GET['user_id'])));
	// } else {
	// 	echo json_encode($order->get_orders());
	// }
	$order_id = $_GET['order_id'];
	echo json_encode($order->get_drinks_by_order_id($order_id));
} else if ($action == 'init') {
	// return id
	echo json_encode($order->create_order());
} else if ($action == 'add') {
	$drink_id = $_POST['drink_id'];
	$order_id = $_POST['order_id'];
	$drink_count = $_POST['drink_count'];
	$size = $_POST['size'];
	$topping = $_POST['topping'];

	$order->add_to_order($drink_id, $order_id, $drink_count, $size, $topping);
} else if ($action == 'delete') {
	if (isset($_POST['drink_id'])) {
		$order->remove_drink_from_order($_POST['drink_id'], $_POST['order_id']);
	} else {
		$order->remove_order($_POST['order_id']);
	}
} else if ($action == '') {
}
