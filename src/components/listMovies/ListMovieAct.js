import  React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovieHome } from '../../actions';
import CardMovie from '../CardMovie';
import ReactPaginate from 'react-paginate';
import './style.css';

const ListMovieAct = ({ movies, fetchMovieHome }) =>{

    const [pageNumber, setPageNumber] = useState(0);

    const moviesPage = 8;
    const pagesVisited = pageNumber * moviesPage;
    
    useEffect(() =>{
        fetchMovieHome('school');
    }, []);

    const renderListMovie = () =>{
        return movies.slice(pagesVisited, pagesVisited + moviesPage).map(movie=>{
            return (
                <Fragment key={movie.id}>
                    <CardMovie title={movie.title} poster={movie.poster_path}/>
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
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
    
};

const mapStateToProps = (state) =>({
    movies: state.movie
});

export default connect(mapStateToProps, {fetchMovieHome}) (ListMovieAct);
