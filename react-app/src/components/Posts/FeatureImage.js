import React from 'react';

function FeatureImage({image}) {
    return (
      <div className="post-detail-feature-div">
          <img className="post-detail-feature-image" src={image} alt="cool posts" />
      </div>
    );
  };

export default FeatureImage;
