const urlArt = `http://php_apache/BKCoffee/api/article.php`;

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
	const data = await res.jsxon();

	return data;
}
export { getArticles }