import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 1rem;
    letter-spacing: 0.5px;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
      background-color: yellow;
      border: 2px solid yellow;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo src={logoImage} alt="Boskalis Logo" />
    <Nav>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/sand" activeClassName="active">
        Sand Dredging
      </NavLink>
      <NavLink to="/water" activeClassName="active">
        Water Dredging
      </NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;