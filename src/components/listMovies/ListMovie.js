import  React, { Fragment, useState } from 'react';
import CardMovie from '../CardMovie';
import ReactPaginate from 'react-paginate';
import './style.css';

const ListMovie = (props) =>{

    const [pageNumber, setPageNumber] = useState(0);

    const moviesPage = 4;
    const pagesVisited = pageNumber * moviesPage;
    
    const renderListMovie = () =>{
        return props.movies.slice(pagesVisited, pagesVisited + moviesPage).map(movie=>{
            return (
                <Fragment key={movie.id}>
                    <CardMovie 
                        id={movie.id}
                        title={movie.title} 
                        poster={movie.poster_path} 
                        release_date={movie.release_date} 
                        vote_average={movie.vote_average}
                        onClick={()=>test}
                    />
                </Fragment>
            )
        })
    }

    const pageCount = Math.ceil(props.movies.length / moviesPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    
    return (
        <div className="row">
            {renderListMovie()}
            <ReactPaginate
                previousLabel={<i className="fas fa-chevron-left" />}
                nextLabel={<i className="fas fa-chevron-right" />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                pageClassName={"btnpag"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
            />
        </div>
    );
    
};


export default ListMovie;
