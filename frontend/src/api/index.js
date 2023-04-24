
function objToFormData(obj) {
	const formData = new FormData();

	for (let key in obj)
	{
		formData.append(key, obj[key]);
	}

	return formData;
}

function sendRequest(url, action, formData) {
	const xmlHttp = new XMLHttpRequest();
	xmlHttp.open("POST", url + action);

	xmlHttp.send(formData);
}

async function fetchData(url, action, formData) {
	const response = await fetch(url + action, {
		method: 'POST',
		body: formData,
	});
	const data = await response.json();
	return data;
}

export { objToFormData, sendRequest, fetchData };
export { getDrinks, getDrinkById } from './drink';
export { getOrderById, getOrders, getOrderByUserId, addToOrder } from './order';