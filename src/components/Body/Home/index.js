import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<h1>My Home Page</h1>
			<Link to='/order'>order</Link>
			<Link to='/admin'>admin</Link>
		</>
	)
}

export default Home;