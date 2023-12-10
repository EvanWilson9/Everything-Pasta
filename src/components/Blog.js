import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore'
import BlogPosts from './BlogPosts';
import CreatePost from './CreatePost';
import { Link } from 'react-router-dom';
import {db} from '../firebase-config';

function Blog({isAuth}) {

    const postsCollectionRef = collection(db, "posts");
    const [postLists, setPostList] = useState([]);

    useEffect(()=>{
        const getPosts = async ()=>{
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };

        getPosts();
    });

    return (
        <>
            <div className="blog-container">
                {postLists.map((post) => {
                    return( 
                        <div>
                            <div className='post'> {post.author.name} </div>
                            <div className='post'> {post.title} </div>
                            <div className='post'> {post.postText} </div>
                            <br/>
                        </div>
                    )
                })}
                {isAuth && <Link to="/createpost"><button className="create-post">Create Post</button></Link>}
            </div>
        </>
    )
}

export default Blog;