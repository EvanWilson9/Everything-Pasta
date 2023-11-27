import React from 'react';
import TopHeader from './TopHeader';

// localStorage.setItem('email', userExport);
// let email = localStorage.getItem("email");


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

function BottomHeader() {
  return (
    <section className='navbar-bottom-section'>
      <div className='navbar-bottom-info'>Eat. Sleep.<span class="slogo-word"> Pasta</span>. Repeat.</div>
    </section>
  );
}

export default {Header, TopHeader};