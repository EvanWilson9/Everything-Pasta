import React from "react";
import {Link} from 'react-router-dom';

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
        <Link to='/blog'>
          <button className="create-btn">
            Create
          </button>
        </Link>
      </div>
      </div>
    </aside>
  );
}

export default BlogFeaturedAside;
