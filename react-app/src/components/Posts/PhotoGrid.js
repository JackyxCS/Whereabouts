import React from 'react';
import PostPreview from './PostPreview.js';
import "./posts.css"

function PhotoGrid({posts}) {

    return (
        <ul className="photo-grid-list">
            {posts && posts?.map((post) => {
                return <PostPreview key={post.id} post={post} />;
            })}
        </ul>
    );
};

export default PhotoGrid;
