const urlArt = `http://localhost/article.php`;

const actions = {
	create: '?action=create',
	read: '?action=read',
	update: '?action=update',
	delete: '?action=delete',
	init: '?action=init',
	add: '?action=add'
}


async function getArticles() {
	const res = await fetch(urlArt + actions.read);
	const data = await res.json();

	return data;
}
export { getArticles }