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

    const dialog = document.getElementById('dialog');  

    return(
        <>
            <TopHeader/>
                <div className="blog-container">
                <BlogPosts/>
                <dialog closed id="dialog">
                    <form id="dialog-form" method="dialog">
                        <div>Create Post</div>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="image"/>
                        <button>Create</button>
                        <div className='exit-dialog' onClick={()=>{
                            dialog.style.display="none";
                        }}>
                            X
                        </div>
                    </form>
                </dialog>
                <button onClick={()=>{
                    dialog.style.display="block";  
                }} className="create-post">
                    Create Post
                </button>
                
            </div>
        </>
    )
}

export default Blog;