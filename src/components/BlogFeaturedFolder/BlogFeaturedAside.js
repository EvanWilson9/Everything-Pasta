import React from "react";
import {Link} from 'react-router-dom';

function BlogFeaturedAside(){
  return(
    <aside className="about-info-aside">
      <div className="about-info-aside-content">
      <div>
        <div className="create-title">Create your own post</div>
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
