import React from 'react';
import ReactPlayer from 'react-player';

const YouTube = ({ youtubeLink }) => {
  return (
    <div>
      <ReactPlayer
        url={youtubeLink}
        controls={true}
        light={true}
        width="100%"
      />
    </div>
  );
};

export default YouTube;
