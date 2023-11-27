import { Link } from "react-router-dom";
import {userExport} from './SignUp';

function TopHeader() {
    return (
      <div id="top-header-container">
        <div id="left-side">
          <img className='title' alt="" src="/images/everything-pasta-logo.png"/>
        </div>
        <div class="right-side">
            <div class="navbar-links">
              <ul>
                <li>
                  <Link to="/" id="link"><p id="home-txt">Home</p></Link>
                </li>
                <li>Recipes</li>
                <Link id="link" to="/blog">
                  <li>Blog</li>
                </Link>
                <li>
                  <Link to="/signup">
                    <button class="log-in-btn">Sign Up</button>
                  </Link>
                </li>
                <li>{userExport}</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

  export default TopHeader;