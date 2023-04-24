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
import { Fragment } from 'react';
import { useState, useEffect } from 'react';

function App() {



  return (
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
  );
}

export default App;
