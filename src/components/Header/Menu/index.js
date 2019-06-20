import React from 'react';

import { List } from './styles';

const itemsMenu = [
  { id: 1, slug: 'empresa', label: 'Empresa' },
  { id: 2, slug: 'servico', label: 'Serviço' },
  { id: 3, slug: 'contato', label: 'Contato' },
];

function Menu() {
  return (
    <List>
      {itemsMenu.map(item => (
        <li key={item.id}>{item.label}</li>
      ))}
    </List>
  );
}

export default Menu;
