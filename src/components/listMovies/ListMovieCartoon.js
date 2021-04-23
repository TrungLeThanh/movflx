import  React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchMovieHome } from '../../actions';
import CardMovie from '../CardMovie';

class ListMovieCartoon extends React.Component {

    componentDidMount() {
        this.props.fetchMovieHome('cartoon');
    }

    renderListMovie() {
        return this.props.movies.map(movie=>{
            return (
                <Fragment key={movie.id}>
                    <CardMovie title={movie.title}/>
                </Fragment>
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderListMovie()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    movies: state.movie
});

export default connect(mapStateToProps, {fetchMovieHome}) (ListMovieCartoon);