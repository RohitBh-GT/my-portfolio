import React from 'react';
import styled from 'styled-components';
import Burger from './burger.jsx';

const Nav = styled.nav`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .heading {
    padding: 5px 0;
    margin-left:8px;
    font-size:2.4rem;
    font-family:'Akaya Kanadaka',cursive;
    color:white
  }
  @media (max-width:820px) {
     justify-content: space-around;
     .heading{
       align-self:center;
     }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="heading">
        My Portfolio
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;