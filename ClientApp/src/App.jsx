import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';

function App() {

    return (
        <React.Fragment>
            <Layout>
                <Routes>
                    {AppRoutes.map(
                        (route, index) => {

                            const { element, ...rest } = route;

                            return <Route key={index} {...rest} element={element} />
                        }
                    )}
                </Routes>
            </Layout>
        </React.Fragment>
    )
}

export default App