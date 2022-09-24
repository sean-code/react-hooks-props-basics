import React from "react";

function Comment(props) {
  return <div className="comment">{props.commentText} {props.country}</div>;
}

export default Comment;
