import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles.css';

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 820px) {
    display: ${({ open }) => open ? 'flex':'none'};
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    z-index:5;
    right: 0;
    height: 50vh;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="#about" className="nav_link">About me</Link>
      <Link className="nav_link">Projects</Link>
      <Link className="nav_link">Certificates</Link>
      <Link className="nav_link">Work experience</Link>
      <Link className="nav_link">Skills</Link>
      <Link className="nav_link">Contact me</Link>
    </Ul>
  )
}

export default RightNav;