import React from 'react';  
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './main/Home';
import BackTop from './BackTop';
import Footer from './Footer';
import VideoDetail from './main/VideoDetail';
import TVDetail from './main/TVDetail';
import Trial from './Trial';
import TVBest from './TVBest';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/movie/:id" exact component={VideoDetail} />
                <Route path="/TV/:id" exact component={TVDetail} />
                <BackTop />
                <TVBest />
                <Trial />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
