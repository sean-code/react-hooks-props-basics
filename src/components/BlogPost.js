import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

export default function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." isPublished = {true} minutesToRead={1}  />
      <Comment commentText="I agree with this statement. - Angela Merkel" country='Belgium'/>
      <Comment commentText="A universal truth. - Noam Chomsky" country = 'Brazil'/>
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" country='New zealand' />
    </div>
  );
}


