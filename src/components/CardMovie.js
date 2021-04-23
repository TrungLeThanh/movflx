import React from 'react';

const CardMovie = ({title}) =>{
    return(
        <div style={{border: '1px solid black', height: '100px', color: '#fff'}} className="col col-lg-3">
            {title}
        </div>
    );
};


export default CardMovie;
