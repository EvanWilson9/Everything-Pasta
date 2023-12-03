import React, { useState } from 'react';
import BlogPosts from './BlogPosts';
import CreatePost from './CreatePost';
import { Link } from 'react-router-dom';

function Blog({isAuth}) {

    return (
        <>
            <div className="blog-container">
            {isAuth && <Link to="/createpost"><button className="create-post">Create Post</button></Link>}
            </div>
        </>
    )
}

export default Blog;