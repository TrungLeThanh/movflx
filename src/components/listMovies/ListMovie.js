import  React, { Fragment, useState, useEffect } from 'react';
import CardMovie from '../CardMovie';
import ReactPaginate from 'react-paginate';
import './style.css';
import { fetchMovieHome } from '../../actions/index';
import {connect} from 'react-redux';


const ListMovie = (props) =>{

    const [pageNumber, setPageNumber] = useState(0);

    const moviesPage = 4;
    const pagesVisited = pageNumber * moviesPage;

    useEffect(() =>{
        props.fetchMovieHome(props.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);
    
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

const mapStateToProps = (state) =>{
    return {movies: state.movie}
}


export default connect(mapStateToProps, {fetchMovieHome}) (ListMovie);
