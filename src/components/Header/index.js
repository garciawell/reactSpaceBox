import React, { useState, useEffect } from 'react';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Box } from './styles';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Header() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Box>
        <div id="outer-container">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {windowDimensions.width > 768 ? (
            <Menu className="hiddenDown" />
          ) : (
            <MenuMobile className="hiddenUp" />
          )}
        </div>
      </Box>
    </Container>
  );
}

export default Header;
