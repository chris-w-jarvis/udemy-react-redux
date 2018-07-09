import React from 'react';

import VideoListItem from './video_list_item'

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem
    onVideoClick={props.onVideoClick}
    key={video.etag}
    video={video} />
  });

  return (
    // bootstrap styling
    // JSX styling: className (instead of class in css) to avoid naming conflicts
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;