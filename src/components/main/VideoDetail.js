import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({id}) =>{
    return (
        <div className="wrap-video-detail">
            <p>ID: {id}</p>
        </div>
    );
};

export default VideoDetail;
