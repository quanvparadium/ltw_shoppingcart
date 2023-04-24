const urlDrink = `http://php_apache/BKCoffee/api/drink.php`;

const actions = {
	create: '?action=create',
	read: '?action=read',
	update: '?action=update',
	delete: '?action=delete',
	init: '?action=init',
	add: '?action=add'
}


async function getDrinks() {
	const res = await fetch(urlDrink + actions.read);
	const data = await res.json();

	return data;
}
async function getDrinkById(id) {
	const url = urlDrink + actions.read + '&id=' + id;
	const res = await fetch(url);
	const data = await res.json();

	return data;
}

export { getDrinks, getDrinkById }