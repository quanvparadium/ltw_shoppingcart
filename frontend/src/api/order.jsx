import { objToFormData, sendRequest } from ".";
const urlOrder = `http://php_apache/BKCoffee/api/order.php`;

const actions = {
	create: '?action=create',
	read: '?action=read',
	update: '?action=update',
	delete: '?action=delete',
	init: '?action=init',
	add: '?action=add'
}

async function getOrders() {
	const res = await fetch(urlOrder + actions.read);
	const data = await res.jsxon();

	return data;
}

async function getOrderById(id) {
	// const url = urlOrder + actions.read + '&id=' + id;
	// const res = await fetch(url);
	// const data = await res.jsxon();

	// return data;
}

async function getOrderByUserId(id) {
	// const url = urlOrder + actions.read + '&user_id=' + id;
	// const res = await fetch(url);
	// const data = await res.jsxon();

	// return data;
}

async function getDrinksByOrderId() {
	let id = localStorage.getItem('order_id');
	if (!id)
	{
		return [];
	}
	const url = urlOrder + actions.read + '&order_id=' + id;
	const res = await fetch(url);
	const data = await res.jsxon();

	return data;
}

async function initOrder() {
	const res = await fetch(urlOrder + actions.init);
	const orderId = await res.jsxon();

	return orderId["max(order_id)"];
}

async function addToOrder(drink_id, drink_count, size, topping) {
	const sizeConverter = (size) => {
		switch (size)
		{
			case 'Vừa': return 's';
			case 'Trung': return 'm';
			case 'Lớn': return 'l';
			default: return 's';
		}
	}

	let data = {
		drink_id: parseInt(drink_id),
		drink_count: parseInt(drink_count),
		size: sizeConverter(size),
		topping: topping.reduce((accum, cur) => {
			accum.push(cur.name);
			return accum;
		}, []).join(',')
	}

	let id = localStorage.getItem('order_id');

	if (!id)
	{
		Promise.resolve(initOrder()).then(id => {
			console.log(id);
			localStorage.setItem('order_id', id);
			data = { ...data, order_id: parseInt(id) };
			const formData = objToFormData(data);
			sendRequest(urlOrder, actions.add, formData)
		});
	}
	else
	{
		data = { ...data, order_id: parseInt(id) };
		const formData = objToFormData(data);
		sendRequest(urlOrder, actions.add, formData)
	}
}

function removeDrinkFromOrder(drink_id) {
	const order_id = localStorage.getItem('order_id');
	const data = { order_id, drink_id };

	const formData = objToFormData(data);
	sendRequest(urlOrder, actions.delete, formData)
}

export { getOrderById, getOrders, getOrderByUserId, addToOrder, getDrinksByOrderId, removeDrinkFromOrder };