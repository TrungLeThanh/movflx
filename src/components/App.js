import React from 'react';  
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './main/Home';
import BackTop from './BackTop';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home} />
                <BackTop />
            </BrowserRouter>
        </div>
    );
};

export default App;
