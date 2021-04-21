import React from 'react';
import Banner from '../Banner';
import ListMovie from '../ListMovie';

class Home extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <ListMovie />
            </>
        );
    };
}

export default Home;
