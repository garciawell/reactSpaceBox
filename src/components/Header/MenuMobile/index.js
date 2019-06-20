import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import { List, LinkMenu, Img } from './styles';

const itemsMenu = [
  { id: 1, slug: 'empresa', label: 'Empresa' },
  { id: 2, slug: 'servico', label: 'Serviço' },
  { id: 3, slug: 'contato', label: 'Contato' },
];

function MenuMobile({ className }) {
  const [menuItem, setMenuItem] = useState(false);
  function closeMenu() {
    setMenuItem(false);
  }

  function handleStateChange(newState) {
    setMenuItem(newState.isOpen);
  }

  return (
    <Menu isOpen={menuItem} classname={className} onStateChange={state => handleStateChange(state)}>
      <Link onClick={() => closeMenu()} to="/">
        <Img width={120} src={logo} alt="Logo Mobile" />
      </Link>
      <List className={className}>
        {itemsMenu.map(item => (
          <li key={item.id}>
            <LinkMenu onClick={() => closeMenu()} to={`/${item.slug}`}>
              {item.label}
            </LinkMenu>
          </li>
        ))}
      </List>
    </Menu>
  );
}

MenuMobile.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MenuMobile;
