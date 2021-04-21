import  React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';
import './ListMovie.css';

const ListMovie = ({ fetchMovie }) =>{

    useEffect(() =>{
        fetchMovie();
    })

    return (
        <div className="list-movie">
            
        </div>
    );
};

const mapStateToProps = (state) =>{
    return { movie: state.movie }
};

export default connect(mapStateToProps, {fetchMovie}) (ListMovie);
