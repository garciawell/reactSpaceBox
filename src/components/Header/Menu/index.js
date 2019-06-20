import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, LinkMenu } from './styles';

const itemsMenu = [
  { id: 1, slug: 'empresa', label: 'Empresa' },
  { id: 2, slug: 'servico', label: 'Serviço' },
  { id: 3, slug: 'contato', label: 'Contato' },
];

function Menu({ className }) {
  const [active, setActive] = useState(window.location.pathname.replace('/', ''));

  return (
    <List className={className}>
      {itemsMenu.map(item => (
        <li key={item.id}>
          <LinkMenu
            active={active === item.slug}
            onClick={() => setActive(item.slug)}
            to={`/${item.slug}`}
          >
            {item.label}
          </LinkMenu>
        </li>
      ))}
    </List>
  );
}

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Menu;
