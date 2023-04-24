import { fetchData, objToFormData, sendRequest } from ".";
const urlAdmin = `http://php_apache/BKCoffee/api/admin.php`;
const actions = {
	create: '?action=create',
	read: '?action=read',
	update: '?action=update',
	delete: '?action=delete'
}

const takeAction = async (command) => {
	const data = { command: command };
	const formData = objToFormData(data);

	const res = fetchData(urlAdmin, "", formData);
	return res;
}

export { takeAction }