import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    console.log(video);
    return (
            <li  onClick={()=>props.onVideoSelect(video)} className="list-group-item">
            <div className="video-list-media">
                <div className='media-left'>
                    <img className='media-object' src={video.snippet.thumbnails.default.url}/>

                </div>
                <div className="media-body">

                    <div className='media-heading'>{video.snippet.title}</div>

                </div>

            </div>

        </li>
    );
}

export default VideoListItem;