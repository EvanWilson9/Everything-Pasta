import React from "react";

function CreatePost() {
  return (
    <div className="create-post-container">
      <div className="post-form">
        <div className='form-structure'>
          <h2 style={{
            color: 'white',
            fontSize:'35px'
          }}>Create Post</h2>

          <input placeholder='Title' className='post-title' type="text" />

          <textarea className='create-post-message' placeholder='Message'></textarea>

          <input type="file" />
          <div className="create-container">
            <button className="create-btn">Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost;