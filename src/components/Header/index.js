import React from 'react';
import logo from 'assets/images/logo.png';

import { Container, Box } from './styles';
import Menu from './Menu/index';

function Header() {
  return (
    <Container>
      <Box>
        <img src={logo} alt="Logo" />
        <Menu />
      </Box>
    </Container>
  );
}

export default Header;
