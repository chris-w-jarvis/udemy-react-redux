import React from 'react';

// more es6: do it with more than one property of props
const VideoListItem = ({video, onVideoClick}) => {
  // es6                this^ is equal to below
  // basically: this argument (props) has a property called video,
      // please set this property to a new variable called video
  //const video = props.video;

  const imageUrl = video.snippet.thumbnails.default.url;

  // each one if just a html (jsx) list element
  return (
    <li onClick={() => onVideoClick(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media_left">
          <img className="media_object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
