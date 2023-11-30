import React from 'react';
import TopHeader from './TopHeader';
import BlogPosts from './BlogPosts';
import CreatePostModule from './CreatePostModule';

function Blog(){

    const CreatePostModule = ()=>{
       
        return(
            <>
               
            </>
        )
    }

    const dialogForm = document.getElementById('dialog-form');  
    const createPost = document.querySelector('.create-post');
    const exitDialog = document.querySelector('.exit-dialog');

    // createPost.addEventListener('click', ()=>{
    //     dialogForm.style.display="block";
    // });

    // exitDialog.addEventListener('click', ()=>{
    //     dialogForm.style.display="none";
    // });

    return(
        <>
            <TopHeader/>
                <div className="blog-container">
                <BlogPosts/>
                
                    <form id="dialog-form" method="dialog">
                        <div className='form-structure'>
                            <h2 style={{
                                color:'white'
                            }}>Create Post</h2>

                            <input placeholder='Title' className='post-title' type="text"/>

                            <textarea className='create-post-message' placeholder='Message'></textarea>
                            
                            <input type="file"/>
                            <div className="create-container">
                                <button className="create-btn">Create</button>
                            </div>
                            <div onClick={()=>{
                                let dialogForm = document.getElementById('dialog-form');  
                                dialogForm.style.display = "block";
                                console.log('close');
                            }} 
                            className='exit-dialog'>
                                X
                            </div>
                        </div>
                    </form>
                <button onClick={()=>{
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