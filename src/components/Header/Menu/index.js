import React from 'react';
import PropTypes from 'prop-types';
import { List, LinkMenu } from './styles';

const itemsMenu = [
  { id: 1, slug: 'empresa', label: 'Empresa' },
  { id: 2, slug: 'servico', label: 'Serviço' },
  { id: 3, slug: 'contato', label: 'Contato' },
];

function Menu({ className, setActive, active }) {
  return (
    <List className={className}>
      {itemsMenu.map(item => (
        <li key={item.id}>
          <LinkMenu
            onClick={() => setActive(item.slug)}
            active={active === item.slug}
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
  setActive: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default Menu;
