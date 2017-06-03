import React from 'react';


const VideoDetails = (props) => {

if(!props.detail){
    return(

        <div>
            Loading..
        </div>
    );
}
    //const videoId ='9_99EjLbnjw'
    const videoId=props.detail.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (


            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url}></iframe>

                </div>
                <div className="details">
                    <div>
                        {props.detail.snippet.title}
                    </div>
                    <div>
                        {props.detail.snippet.description}

                    </div>

                </div>

            </div>



    )


};

export default VideoDetails;