import React from 'react';
import { Link } from "react-router-dom";
import {displayEmail} from './SignUp'

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
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Recipes</li>
              <li>Blog</li>
              <li><button class="search-btn">Search</button></li>
              <li>
                <Link to="/signup">
                  <button class="log-in-btn">Sign Up</button>
                </Link>
              </li>
              <li>{displayEmail}</li>
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