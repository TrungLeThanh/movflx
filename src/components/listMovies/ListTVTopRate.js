import  React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTVTopRate } from '../../actions';
import CardTV from '../CardTV';
import './style.css';

const ListTVBest = ({ TVTopRate, fetchTVTopRate }) =>{

    useEffect(() =>{
        fetchTVTopRate();
    });

    const renderListMovie = () =>{
        return TVTopRate.slice(0, 8).map(tv=>{
            return (
                <Fragment key={tv.id}>
                    <CardTV 
                        id={tv.id}
                        title={tv.name} 
                        poster={tv.poster_path} 
                        release_date={tv.first_air_date} 
                        vote_average={tv.vote_average}
                    />
                </Fragment>
            )
        })
    }

    return (
        <div className="row">
            {renderListMovie()}
        </div>
    );
    
};

const mapStateToProps = (state) =>({
    TVTopRate: state.tvTopRate
});

export default connect(mapStateToProps, {fetchTVTopRate}) (ListTVBest);
