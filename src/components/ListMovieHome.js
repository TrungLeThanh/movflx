import  React, {useState} from 'react';
import './ListMovieHome.css';
import ListMovieAct from './listMovies/ListMovieAct';
import ListMovieHorror from './listMovies/ListMovieHorror';
import ListMovieCartoon from './listMovies/ListMovieCartoon';
import Button from './Button';

const ListMovieHome = () =>{
    
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
            return <ListMovieAct />;
        }
        else if(actionType===2){
            return <ListMovieHorror />;
        }
        return <ListMovieCartoon />;
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


export default ListMovieHome;
