import { fetchData, objToFormData, sendRequest } from ".";
const urlUser = `http://localhost/user.php`;
const actions = {
	create: '?action=create',
	read: '?action=read',
	read_all: '?action=read_all',
	update: '?action=update',
	delete: '?action=delete',
	login: '?action=login',
	alter: '?action=alter',
	sign_up: '?action=sign_up'
}


async function login(username, password) {
	const data = { username, password };
	const formData = objToFormData(data);

	const responseData = await fetchData(urlUser, actions.login, formData);
	//console.log(responseData);

	if (localStorage.getItem('order_id'))
	{
		localStorage.removeItem('order_id')
	}

	localStorage.removeItem('username');
	localStorage.removeItem('password');
	localStorage.removeItem('name');
	localStorage.removeItem('point');
	localStorage.removeItem('address');
	localStorage.removeItem('role');

	if (responseData.id !== '-1')
	{
		localStorage.setItem('password', responseData.password);
		localStorage.setItem('username', responseData.username);
		localStorage.setItem('name', responseData.name);
		localStorage.setItem('point', responseData.point ?? 0);
		localStorage.setItem('address', responseData.address);
		localStorage.setItem('role', responseData.role);
		return true;
	}
	return false;
}

async function alterUser(username, password, name, email, address) {
	const data = { username, password, name, email, address };
	const formData = objToFormData(data);

	const responseData = await fetchData(urlUser, actions.alter, formData);

	console.log(responseData)

	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
	localStorage.setItem('name', name);
	localStorage.setItem('point', 0);
	localStorage.setItem('address', address);
	localStorage.setItem('role', 'cus');
}

async function getUserByName() {
	const username = localStorage.getItem('username');
	if (!username)
	{
		return;
	}

	const data = { username };
	const formData = objToFormData(data);

	const responseData = await fetchData(urlUser, actions.read, formData);
	console.log(responseData);

	if (responseData)
	{
		localStorage.setItem('username', responseData.username);
		localStorage.setItem('password', responseData.password);
		localStorage.setItem('name', responseData.name);
		localStorage.setItem('point', responseData.point ?? 0);
		localStorage.setItem('address', responseData.address);
		localStorage.setItem('role', responseData.role);
	}

	return responseData;
}

async function signUp(username, password, name, email, address) {
	const data = { username, password, name, email, address };
	const formData = objToFormData(data);

	const responseData = await fetchData(urlUser, actions.sign_up, formData);

	if (responseData.status === 'OK')
	{
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
		localStorage.setItem('name', name);
		localStorage.setItem('point', 0);
		localStorage.setItem('address', address);
		localStorage.setItem('role', 'cus');
		return true;
	}
	else if (responseData.status === 'DUP_USERNAME')
	{
		alert('Tên đăng nhập bị trùng!\nVui lòng chọn tên khác!')
	}
	return false;
}

async function getAllUser(type) {
	const res = await fetch(urlUser + actions.read_all + "&type=" + type);
	const data = await res.json();

	return data;
}

export { login, signUp, getAllUser, getUserByName, alterUser }