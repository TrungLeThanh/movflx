import React from 'react';
import Banner from '../Banner';
import ListMovieHome from '../ListMovieHome';
import Services from '../Services';
import TopRateMovie from '../TopRateMovie';
import Ads from '../Ads';

class Home extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <ListMovieHome />
                <Services />
                <TopRateMovie />
                <Ads />
                
            </>
        );
    };
}

export default Home;
