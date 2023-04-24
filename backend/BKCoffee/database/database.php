<?php
class Database
{
	private $servername = 'mysql';
	private $username = 'php';
	private $password = 'php_123456';
	private $dbname = 'bk_coffee';
	public function __construct()
	{
	}

	public function connect()
	{
		$conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

		return $conn;
	}
}
