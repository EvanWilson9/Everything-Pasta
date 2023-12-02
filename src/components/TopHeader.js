import { Link } from "react-router-dom";
// import {userExport} from './SignUp';

function TopHeader({user}) {
    return (
      <div id="top-header-container">
        <div id="left-side">
          <img className='title' alt="" src="/images/everything-pasta-logo.png"/>
        </div>
        <div class="right-side">
            <div class="navbar-links">
              <ul>
                <li>
                  <Link to="/" id="link">
                    <p id="home-txt">Home</p>
                  </Link>
                </li>
                <li>
                <Link id="link" to="/blog">
                  <p>Blog</p>
                </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button class="log-in-btn">Sign Up / Log In</button>
                  </Link>
                </li>
                <li>{user? user.email : 'Guest'}</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

  export default TopHeader;