import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchTVById} from '../../actions/index';
import DetailTV from '../DetailTV';

const TVDetail = (props) =>{

    useEffect(() =>{
        props.fetchTVById(props.match.params.id);
    })

    return (
        <div className="wrap-video-detail">
            <div className="wrap-video-detail">
            <DetailTV
                poster={props.TVById.poster_path}
                title={props.TVById.name}
                status={props.TVById.status}
                runtime={props.TVById.runtime}
                overview={props.TVById.overview}
                date={props.TVById.release_date}
                tagline={props.TVById.tagline}
                homepage={props.TVById.homepage}
            />
        </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {TVById: state.TVById};
};

export default connect(mapStateToProps, {fetchTVById}) (TVDetail);
