import { fetchData, objToFormData, sendRequest } from ".";
const urlAdmin = `http://localhost/admin.php`;
const urlBook = `http://localhost/books_q.php`;

const actions = {
	create: '?action=create',
	read: '?action=read',
	update: '?action=update',
	delete: '?action=delete'
}

const takeAction = async (command) => {
	// const data = { command: command };
	// const formData = objToFormData(data);
	const res = fetchData(command, "");
	// console.log(res);
	return res;
}

export { takeAction }