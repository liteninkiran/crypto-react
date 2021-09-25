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

            {/* Content */}
            <div className="main">

                {/* Main Content */}
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

                {/* Footer */}
                <div className="footer">

                    {/* Content */}
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021&nbsp;
                        <Link to="/">Cryptoverse Inc.</Link><br />
                        All Rights Reserved.
                    </Typography.Title>

                    {/* Links */}
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>

                </div>

            </div>

        </div>
    );
}

export default App;
