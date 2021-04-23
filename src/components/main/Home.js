import React from 'react';
import Banner from '../Banner';
import ListMovieHome from '../ListMovieHome';

class Home extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <ListMovieHome />
            </>
        );
    };
}

export default Home;
