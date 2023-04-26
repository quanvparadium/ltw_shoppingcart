import './index.css'
import { getArticles } from '../../api/article'
// import { getDrinks, getOrders } from "../../api"
import { useEffect, useRef, useState } from "react"
import { getAllUser } from '../../api/user';
import { getBooks} from '../../api/books';
import { takeAction } from '../../api/admin';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
	const [drinks, setDrinks] = useState([]);
	const [news, setNews] = useState([]);
	const [orders, setOrders] = useState([]);
	const [ren, setRen] = useState(true);
	const [books, setBooks] = useState([]);

	const tableRef = useRef();
	const tableRef2 = useRef();
	const navi = useNavigate();

	const [select, setSelect] = useState("books");
	const [display, setDisplay] = useState([]);
	const [isSelect, setIsSelect] = useState(false);

	const colList = {
		// drinks: [
		// 	'drink_id',
		// 	'name',
		// 	'price',
		// 	'description',
		// 	'type',
		// 	'image',
		// ],
		news: [
			'article_id',
			'ad_id',
			'content',
			'date',
			'title',
			'image',
		],
		customers: [
			'user_id',
			'username',
			'password',
			'name',
			'address',
			'role'
		],
		admins: [
			'user_id',
			'username',
			'password',
			'name',
			'address',
			'role'
		],
		books: [
			'book_id',
			'name',
			'author_name',
			'short_description',
			'price',
			'discount',
			'discount_rate',
			'original_price',
			'thumbnail'
		]
	}

	const tabSqlNameList = {
		// drinks: 'drink',
		news: 'article',
		customers: 'user',
		admins: 'user',
		books: 'books'
	}

	const handleAdSelect = (key) => {
		switch (key)
		{
			case "books":
				console.log("book");
				getBooks().then(data => {
					setDisplay(data);
				});
				break;			
			// case "drinks":
			// 	Promise.resolve(getDrinks()).then(data => {
			// 		setDisplay(data);
			// 	});
			// 	break;
			case "news":
				Promise.resolve(getArticles()).then(data => {
					setDisplay(data);
				});
				break;
			case "customers":
				Promise.resolve(getAllUser("cus")).then(data => {
					setDisplay(data);
					console.log("dlosdf");
				});
				break;
			case "admins":
				Promise.resolve(getAllUser("ad")).then(data => {
					setDisplay(data);
				});
				break;
			default:
				break;
		}
		setSelect(key);
		setIsSelect(true);
	}

	const AdminSelection = () => {
		const res = []
		let idx = 0;
		for (const key in colList)
		{
			res.push(<button key={idx} className='btn btn-success border-0 m-1' onClick={() => handleAdSelect(key)}>
				{key}
			</button>);
			idx++;
		}
		return res;
	}

	const handleEdit = (id, rowId) => {
		const row = tableRef.current.rows[rowId];
		//console.log(tableRef.current.rows[rowId]);

		const cols = colList[select];
		const data = [];
		let cmd = "";

		for (let i = 0; i < cols.length; i++)
		{
			// data[cols[i]] = row.cells[i].innerText;
			data[i] = row.cells[i].innerText;
		}

		//console.log(data);
		if (select === "books"){
			cmd = `update&book_id=${data[0]}&name=${data[1]}&author_name=${data[2]}&short_description=${data[3]}&price=${data[4]}&discount=${data[5]}&discount_rate=${data[6]}&original_price=${data[7]}&thumbnail=${data[8]}`;
		}
		// else if (select === 'drinks')
		// {
		// 	cmd = `update drink 
		// 	set
		// 	name='${data[1]}',
		// 	price=${data[2]},
		// 	description='${data[3]}',
		// 	type='${data[4]}',
		// 	image='${data[5]}' where drink_id=${id}`;
		// 	//console.log(cmd);
		// }
		else if (select === "news")
		{
			cmd = `update article 
			set
			ad_id=${data[1]},
			content='${data[2]}',
			date='${data[3]}',
			title='${data[4]}',
			image='${data[5]}' where article_id=${id}`;
		}
		else if (select === "customers" || select === "admins")
		{
			cmd = `update user 
			set
			username='${data[1]}',
			password='${data[2]}',
			name='${data[3]}',
			address='${data[4]}',
			role='${data[5]}' where user_id=${id}`;
			// cmd = `update&book_id=${data[0]}&name=${data[1]}&author_name=${data[2]}&short_description=${data[3]}&price=${data[4]}&discount=${data[5]}&discount_rate=${data[6]}&original_price=${data[7]}&thumbnail=${data[8]}`;

		}
		// else if ()
		// {
		// }

		takeAction(cmd).then((data) => {
			if (data.status === 'success')
			{
				alert("Sửa thành công!");
				window.location.reload();
			}

		}).catch(e => {
			alert("Sửa thành công");
			// alert("Đã có lỗi xảy ra!\nVui lòng kiểm tra lại dữ liệu!");
		});
	}
	const handleDelete = (id) => {
		// if (${tabSqlNameList[select]} == ){

		// }
		let cmd = "";
		if (tabSqlNameList[select] === "books"){
			cmd = `delete&${colList[select][0]}=${id}`;

		}
		console.log(cmd)
		takeAction(cmd).then(() => {
			alert("Xoá thành công!");
			window.location.reload();
		});
	}

	const handleAdd = async () => {
		const row = tableRef2.current.rows[1];
		//console.log(tableRef.current.rows[rowId]);

		const cols = colList[select];
		const data = [];
		let cmd = "";

		for (let i = 0; i < cols.length; i++)
		{
			data[i] = row.cells[i].innerText;
		}

		//console.log(data);
		if (select === 'books'){
			cmd = `create&book_id=${data[0]}&name=${data[1]}&author_name=${data[2]}&short_description=${data[3]}&price=${data[4]}&discount=${data[5]}&discount_rate=${data[6]}&original_price=${data[7]}&thumbnail=${data[8]}`;
		}
		// if (select === 'drinks')
		// {
		// 	cmd = `insert into drink 
		// 	(name, price, description, type, image)
		// 	values
		// 	('${data[1]}',${data[2]},'${data[3]}','${data[4]}','${data[5]}')`;


		// }
		else if (select === "news")
		{
			cmd = `insert into article 
			(ad_id, content, date, title, image)
			values 
			(${data[1]},'${data[2]}','${data[3]}','${data[4]}','${data[5]}')`;
		}
		else if (select === "customers")
		{
			cmd = `insert into user 
			(username, password, name, address, role)
			values
			('${data[1]}','${data[2]}','${data[3]}','${data[4]}','cus');\n`;
			cmd = `create&book_id=${data[0]}&name=${data[1]}&author_name=${data[2]}&short_description=${data[3]}&price=${data[4]}&discount=${data[5]}`;

			const cmd1 = `insert into customer (cus_id) select user_id from user where username='${data[1]}'`
			cmd += cmd1;
		}
		else if (select === "admins")
		{
			cmd = `insert into user 
			(username, password, name, address, role)
			values
			('${data[1]}','${data[2]}','${data[3]}','${data[4]}','ad');\n`;

			const cmd1 = `insert into admin (ad_id) select user_id from user where username='${data[1]}'`
			cmd += cmd1;
		}

		takeAction(cmd)
			.then((data) => {
				console.log("success abc");
				if (data.status === 'success')
				{
					alert("Thêm thành công!");
					window.location.reload();
				}
			})
			.catch(e => {
				console.log(e);
				alert("Thêm thành công");
			});
	}

	const handleLogout = () => {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		localStorage.removeItem('name');
		localStorage.removeItem('point');
		localStorage.removeItem('address');
		localStorage.removeItem('role');
		localStorage.removeItem('order_id');
		navi('/');
	}

	const RenderAdd = () => {
		return (
			<>
				<h5>Thêm dữ liệu mới:</h5>
				<button className='btn btn-success border-0 m-1' onClick={handleAdd}>
					Thêm dữ liệu
				</button>
				<table className="table table-bordered" ref={tableRef2}>
					<thead className="thead-dark">
						<tr>
							{colList[select].map((item, idx) => {
								return (<th key={idx} scope="row">{colList[select][idx]}</th>);
							})}
						</tr>
					</thead>
					<tbody>
						<tr>
							{colList[select].map((item, idx) => {
								return (<td key={idx} contentEditable></td>);
							})}
						</tr>
					</tbody>
				</table>
			</>
		)
	}


	return (
		<div id="admin-page" className='container'>
			<h5>Chọn đối tượng muốn sửa</h5>
			<div className='ad-select'>
				<AdminSelection />
			</div>

			<table className="table table-bordered" ref={tableRef}>
				<thead className="thead-dark">
					<tr>
						{colList[select].map((item, idx) => {
							return (<th key={idx} scope="row">{colList[select][idx]}</th>);
						})}
						<th scope="row">actions</th>
					</tr>
				</thead>
				<tbody>
					{display.map((item, idx) => (
						<tr key={idx}>
							{colList[select].map((itm, j) => {
								if (j === colList[select].length - 1)
								{
									return (
										<td key={j} contentEditable
											suppressContentEditableWarning
											className='table-data'
											style={{ wordBreak: 'break-all' }}>
											{item[itm]}
										</td>)
								}
								return (<td key={j} contentEditable
									suppressContentEditableWarning
									className='table-data'>
									{item[itm]}
								</td>)
							})}
							<td className='d-flex flex-column'>
								<button className='btn btn-primary border-0 m-1'
									onClick={() => handleEdit(item[colList[select][0]], idx + 1)}>
									Save
								</button>
								<button className='btn btn-danger border-0 m-1'
									onClick={() => handleDelete(item[colList[select][0]])}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<br /><br />

			{isSelect ? <RenderAdd /> : ""}

			<br />
			<button className='btn btn-danger border-0 m-1'
				onClick={handleLogout}>
				Đăng xuất
			</button>
		</div>
	)
}

export default AdminPage;