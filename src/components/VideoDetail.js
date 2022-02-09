import React from "react-dom";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const vidSrc = `https://www.youtube-nocookie.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={vidSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
