import React from 'react';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Box } from './styles';
import Menu from './Menu/index';

function Header() {
  return (
    <Container>
      <Box>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Menu />
      </Box>
    </Container>
  );
}

export default Header;
