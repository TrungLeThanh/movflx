import React from 'react';  
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './main/Home';
import BackTop from './BackTop';
import Footer from './Footer';
import VideoDetail from './main/VideoDetail';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/movie/:id" exact component={VideoDetail} />
                <BackTop />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
