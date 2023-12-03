import React from 'react';
import { TopHeader } from './SignUp';

// localStorage.setItem('email', userExport);
// let email = localStorage.getItem("email");


function Header() {
  let userName = 'Email';
  return (
    <>
      <nav id="navbar">
        <TopHeader user={userName}/>
        <BottomHeader/>
      </nav>
    </>
  );
}

export function BottomHeader() {
  return (
    <section className='navbar-bottom-section'>
      <div className='navbar-bottom-info'>Eat. Sleep.<span class="slogo-word"> Pasta</span>. Repeat.</div>
    </section>
  );
}

export default Header;