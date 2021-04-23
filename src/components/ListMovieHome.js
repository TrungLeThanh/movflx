import  React, {useState} from 'react';
import './ListMovieHome.css';
import ListMovieAct from './listMovies/ListMovieAct';
import ListMovieHorror from './listMovies/ListMovieHorror';
import ListMovieCartoon from './listMovies/ListMovieCartoon';
import Button from './Button';

const ListMovieHome = () =>{
    
    const [actionType, setActionType] = useState(1); 

    const onClickAct = () =>{
        setActionType(1);
    }

    const onClickHorror = () =>{
        setActionType(2);
    }

    const onClickCartoon = () =>{
        setActionType(3);
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
            <span>
                <Button 
                    size="medium"
                    color="yellow"
                    nameButton="Act"
                    onClick={onClickAct}
                />
                <Button 
                    size="small"
                    color="yellow"
                    nameButton="Horror"
                    onClick={onClickHorror}
                />
                <Button 
                    size="small"
                    color="yellow"
                    nameButton="Cartoon"
                    onClick={onClickCartoon}
                />
            </span>
            {renderList()}
        </div>
    );
}


export default ListMovieHome;
