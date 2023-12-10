import React, { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost() {

  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () =>{
    await addDoc(postsCollectionRef, {
      title, 
      postText, 
      author: {name: auth.currentUser.email, id: auth.currentUser.uid}} );

      navigate('/blog');
  };
  
  return (
    <div className="create-post-container">
      <div className="post-form">
        <div className='form-structure'>
          <h2 style={{
            color: 'white',
            fontSize:'35px'
          }}>Create Post</h2>

          <input placeholder='Title' className='post-title' type="text" onChange={(e)=>{
            setTitle(e.target.value);
          }} />

          <textarea className='create-post-message' placeholder='Message' onChange={(e)=>{
            setPostText(e.target.value);
          }}></textarea>

          <input type="file" />
          <div className="create-container">
            <button className="create-btn" onClick={createPost}>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost;