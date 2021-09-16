import React from 'react';
import CommentDetail from './CommentDetail.js';
import "./comments.css"

function CommentsList() {

    return (
        <div className="comment-section-div">
            <h2 className="comment-section-title" >Comments</h2>
            <ul className="comments-list">
                <CommentDetail />
                {/* {comments && comments?.map((comment) => {
                    return <CommentDetail key={comment.id} comment={comment} />;
                })} */}
            </ul>
        </div>

    );
};

  export default CommentsList;
