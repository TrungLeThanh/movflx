import React from 'react';  
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './main/Home';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home} />
            </BrowserRouter>
        </div>
    );
};

export default App;
