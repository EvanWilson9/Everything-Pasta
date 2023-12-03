import React from 'react';
import { TopHeader } from './SignUp';
import BlogPosts from './BlogPosts';
import { useLocation } from 'react-router-dom';

function Blog({ user }) {

    const dialogForm = document.getElementById('dialog-form');
    const createPost = document.querySelector('.create-post');
    const exitDialog = document.querySelector('.exit-dialog');

    // createPost.addEventListener('click', ()=>{
    //     dialogForm.style.display="block";
    // });

    // exitDialog.addEventListener('click', ()=>{
    //     dialogForm.style.display="none";
    // });

    // const location = useLocation();
    // const user = location.state.user;

    return (
        <>
            <TopHeader />
            <div className="blog-container">
                <BlogPosts />

                <div id="dialog-form" method="dialog">
                    <div className='form-structure'>
                        <h2 style={{
                            color: 'white'
                        }}>Create Post</h2>

                        <input placeholder='Title' className='post-title' type="text" />

                        <textarea className='create-post-message' placeholder='Message'></textarea>

                        <input type="file" />
                        <div className="create-container">
                            <button className="create-btn">Create</button>
                        </div>
                        <div onClick={() => {
                            let dialogForm = document.getElementById('dialog-form');
                            dialogForm.style.display = "block";
                            console.log('close');
                        }}
                            className='exit-dialog'>
                            X
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    let dialogForm = document.getElementById('dialog-form');
                    dialogForm.style.display = "none";
                    console.log('open');
                }}
                    className="create-post">
                    Create Post
                </button>

            </div>
        </>
    )
}

export default Blog;