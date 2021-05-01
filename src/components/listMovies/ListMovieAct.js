import  React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovieHome } from '../../actions';
import CardMovie from '../CardMovie';
import ReactPaginate from 'react-paginate';
import './style.css';

const ListMovieAct = ({ movies, fetchMovieHome }) =>{

    const [pageNumber, setPageNumber] = useState(0);

    const moviesPage = 4;
    const pagesVisited = pageNumber * moviesPage;
    
    useEffect(() =>{
        fetchMovieHome('war');
    });

    const test = () =>{
        alert('aa');
    }

    const renderListMovie = () =>{
        return movies.slice(pagesVisited, pagesVisited + moviesPage).map(movie=>{
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

    const pageCount = Math.ceil(movies.length / moviesPage);

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

const mapStateToProps = (state) =>({
    movies: state.movie
});

export default connect(mapStateToProps, {fetchMovieHome}) (ListMovieAct);
