import React from 'react';
import VideoItem from "./VideoItem";

// Instead of passing props we can destructure using ES6 syntax
// just the videos property out of the props object
// BEFORE:
// const VideoList = (props) => {
//     return (
//         <div>
//             {props.videos.length}
//         </div>
//     );
// };

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        );
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;
