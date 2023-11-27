import React from 'react';
import TopHeader from './TopHeader';
import BlogPosts from './BlogPosts';
import CreatePostModule from './CreatePostModule';

function Blog(){

    document.querySelector('.create-post')

    return(
        <>
            <TopHeader/>
                <div className="blog-container">
                <BlogPosts/>
                <button className="create-post">Create Post</button>
            </div>
        </>
    )
}

export default Blog;