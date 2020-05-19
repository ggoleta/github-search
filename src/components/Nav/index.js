import React from 'react';
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Container, Logo, Buttons } from './styles'

const Nav = ({ navItems }) => (
  <Container>
    <Logo>
      <FaGithub size={30} />
      <h1>Github Search - By Roger</h1>
    </Logo>
    <Buttons>
      {navItems.map( item => (
        <Link key={item.label} to={item.link}>{item.label}</Link>
      ))}
    </Buttons>
  </Container>
);

Nav.propTypes = {
  navItems: PropTypes.array.isRequired
}

export default Nav;