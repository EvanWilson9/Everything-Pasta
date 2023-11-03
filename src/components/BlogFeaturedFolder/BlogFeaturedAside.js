import React from "react";

function BlogFeaturedAside(){
  return(
    <aside className="about-info-aside">
      <div className="about-info-aside-content">
      <div>
        <div className="create-title">Create your own post</div>
      </div>
      <div className="create-own-inputs">
        <div>
         <input className="create-own-input" type="text" placeholder="Title"/>
        </div>
        <div>
        <textarea className="create-message" placeholder="Message"></textarea>
        </div>
        <div className="insert-img-container">
         <input className="insert-img" id="file" type="file"/>
         <label for="file" className="insert-img-btn">Choose an image</label>
        </div>
      </div>
      <div className="create-container">
        <button className="create-btn">Create</button>
      </div>
      </div>
    </aside>
  );
}

export default BlogFeaturedAside;
