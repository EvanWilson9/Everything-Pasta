import React from "react";
import ReviewsFeatured from './BlogFeaturedFolder/ReviewsFeatured';
import BlogFeaturedAside from "./BlogFeaturedFolder/BlogFeaturedAside";

function BlogFeaturedSection(){
  return(
    <div className='blog-section-container'>
      <ReviewsFeatured/>
      <BlogFeaturedAside/>
    </div>
  );
}

export default BlogFeaturedSection;