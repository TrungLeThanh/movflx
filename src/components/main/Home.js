import React from 'react';
import Banner from '../Banner';
import ListMovieHome from '../ListMovieHome';
import Services from '../Services';

class Home extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <ListMovieHome />
                <Services />
            </>
        );
    };
}

export default Home;
