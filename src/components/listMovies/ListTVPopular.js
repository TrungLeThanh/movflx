import  React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTVPopular } from '../../actions';
import CardTV from '../CardTV';
import './style.css';

const ListTVPopular = ({ TVPopular, fetchTVPopular }) =>{

    useEffect(() =>{
        fetchTVPopular();
    });

    const renderListMovie = () =>{
        return TVPopular.slice(8, 12).map(tv=>{
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
    TVPopular: state.tvPopular
});

export default connect(mapStateToProps, {fetchTVPopular}) (ListTVPopular);
