import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import {db} from '../firebase-config';
import ContactForm from './ContactForm';

function Blog({isAuth}) {

    const postsCollectionRef = collection(db, "posts");
const [postLists, setPostList] = useState([]);

useEffect(() => {
  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  getPosts().then((posts) => {
    setPostList(posts);
    console.log('test');
  });
}, []);

    const Post = ()=>{
        return(
            <div className='post'>
                <div className='post-author'> evan@gmail.com </div>
                <div className='post-titletext'> This is a title for the post</div>
                <div className='post-posttext'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                <br/>
            </div>
        )
    }

    return (
        <>
            <div className="blog-container">
                <div className='blog-section-title-wrapper'>
                    <div className='blog-section-title'>
                        Join the conversation on all things pasta!
                    </div>
                </div>
                <div className='posts-container'>
                    {/* <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/> */}
                    {postLists.map((post) => {
                        return( 
                            <div className='post'>
                                <div className='post-author'> {post.author.name} </div>
                                <div className='post-titletext'> {post.title} </div>
                                <div className='post-posttext'> {post.postText} </div>
                                <br/>
                            </div>
                        )
                    })}
                </div>
                {isAuth && <Link to="/createpost"><button className="create-post">Create Post</button></Link>}
            </div>
            <ContactForm/>
        </>
    )
}

export default Blog;