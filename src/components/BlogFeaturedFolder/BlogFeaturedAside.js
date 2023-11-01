import React from "react";

function BlogFeaturedAside(){
  return(
    <aside className="about-info-aside">
      <div className="about-info-aside-content">
      <div>
        <div className="create-title">Create your own post</div>
      </div>
      <div className="create-own-inputs">
        <div className="insert-img-container">
         <input className="insert-img" id="image-id" type="file"/>
        </div>
        <div>
         <input className="create-own-input" type="text" placeholder="Title"/>
        </div>
        <div>
        <textarea className="create-message" placeholder="Message"></textarea>
        </div>
      </div>
      <div>
      <button className="create-btn">Create</button>
      </div>
      </div>
    </aside>
  );
}

export default BlogFeaturedAside;
