const urlBook = `http://localhost/books_q.php`;

const actions = {
	create: '?action=create',
	read: '?action=read',
	update: '?action=update',
	delete: '?action=delete',
	init: '?action=init',
	add: '?action=add'
}


async function getBooks() {
    
    const res = await fetch(urlBook + actions.read);
	const data = await res.json();
    console.log(data);
	return data;
}


async function getBookById(id) {
	const url = urlBook + actions.read + '&id=' + id;
	const res = await fetch(url);
	const data = await res.json();

	return data;
}

export { getBooks, getBookById }