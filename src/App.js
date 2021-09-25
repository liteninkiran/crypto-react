import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, CryptoCurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">

            {/* Navbar */}
            <div className="navbar">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/" component={Homepage} />
                            <Route exact path="/exchanges" component={Exchanges} />
                            <Route exact path="/cryptocurrencies" component={CryptoCurrencies} />
                            <Route exact path="/crypto/:coinId" component={CryptoDetails} />
                            <Route exact path="/news" component={News} />
                        </Switch>
                    </div>
                </Layout>
            </div>

            {/* Footer */}
            <div className="footer">
            
            </div>

        </div>
    );
}

export default App;
