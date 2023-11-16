import React from 'react';
import SignUp from './SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav id="navbar">
        <TopHeader />
        <BottomHeader />
      </nav>
    </>
  );
}

function TopHeader() {
  return (
    <div id="top-header-container">
      <div id="left-side">
        <img className='title' alt="" src="/images/everything-pasta-logo.png"/>
      </div>
      <div class="right-side">
          <div class="navbar-links">
            <Router>
              <Routes>
                <Route
                  exact
                  path="/signup"
                  element={<SignUp/>}
                />
              </Routes>
            </Router>
            <ul>
              <li>Home</li>
              <li>Recipes</li>
              <li>Blog</li>
              <li><button class="search-btn">Search</button></li>
              <li><button class="log-in-btn"><Link to="/signup">Sign Up</Link></button></li>
            </ul>
          </div>
        </div>
      </div>
  );
}

function BottomHeader() {
  return (
    <section className='navbar-bottom-section'>
      <div className='navbar-bottom-info'>Eat. Sleep.<span class="slogo-word"> Pasta</span>. Repeat.</div>
    </section>
  );
}

export default Header;