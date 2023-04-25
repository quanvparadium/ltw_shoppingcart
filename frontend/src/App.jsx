import {
    Body
} from './components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { publicRoutes } from './routes';
import { Fragment, useState } from 'react';
import { MainContext } from './components/context';

function App() {
    const [cart, setCart] = useState({
        open: false,
        items: []
    })

    const updateCart = (newCart) => {
        setCart(newCart)
    }

    return (
        <MainContext.Provider value={{ cart, updateCart }}>
            <div className="App">
                <Router>
                    <Body>
                        <Routes>
                            {
                                publicRoutes.map((routes, id) => {
                                    const Page = routes.component;
                                    const Layout = routes.layout ? routes.layout : Fragment;
                                    return (
                                        <Route
                                            key={id}
                                            path={routes.path}
                                            element={
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            }
                                        />
                                    )
                                })
                            }
                        </Routes>
                    </Body>
                </Router>

            </div>
        </MainContext.Provider>
    );
}

export default App;
