import React from 'react';
import Banner from '../Banner';
import ListMovieHome from '../ListMovieHome';
import Services from '../Services';
import TopRateMovie from '../TopRateMovie';
import Ads from '../Ads';
import TVBest from '../TVBest';
import Trial from '../Trial';

class Home extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <ListMovieHome />
                <Services />
                <TopRateMovie />
                <Ads />
                <TVBest />
                <Trial />
            </>
        );
    };
}

export default Home;
