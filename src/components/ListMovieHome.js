import  React, {useState} from 'react';
import './ListMovieHome.css';
import Button from './Button';
import ListMovie from './listMovies/ListMovie';
import {fetchMovieHome} from '../actions/index';
import {connect} from 'react-redux';

const ListMovieHome = ({movies,fetchMovieHome}) =>{
    
    const [actionType, setActionType] = useState(1);
    const [active, setActive] = useState(1);

    const onClickAct = () =>{
        setActionType(1);
        setActive(1);
    }

    const onClickHorror = () =>{
        setActionType(2);
        setActive(2);
    }

    const onClickCartoon = () =>{
        setActionType(3);
        setActive(3);  
    }

    const renderList = () =>{   
        if(actionType===1){
            return <ListMovie type="war" fetchMovieHome={fetchMovieHome("war")} movies={movies} />;
        }
        if(actionType===2){
            return <ListMovie type="horror" fetchMovieHome={fetchMovieHome("horror")} movies={movies} />;
        }
        return <ListMovie type="superman" fetchMovieHome={fetchMovieHome("superman")} movies={movies} />;
    };

    return (
        <div className="list-movie">
            <div className="title">
                <p>ONLINE STREAMING</p>
                <h2>Upcoming Movies</h2>
            </div>
            <div className="custom-btn">
                <Button 
                    size="medium"
                    color="yellow"
                    nameButton="War"
                    onClick={onClickAct}
                    active={active===1 ? 'active' : ''}
                />
                <Button 
                    size="small"
                    color="yellow"
                    nameButton="Horror"
                    onClick={onClickHorror}
                    active={active===2 ? 'active' : ''}
                />
                <Button 
                    size="small"
                    color="yellow"
                    nameButton="Superman"
                    onClick={onClickCartoon}
                    active={active===3 ? 'active' : ''}
                />
            </div>
            <div className="show">
                {renderList()}
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {movies: state.movie}
}

export default connect(mapStateToProps, {fetchMovieHome}) (ListMovieHome);
