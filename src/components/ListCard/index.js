import React from 'react';
import data from 'services/dados';
import {
  BoxShadow, Figure, Box, Notification,
} from './styles';

export default function ListCard() {
  return (
    <Box>
      {data.map(item => (
        <BoxShadow key={item.id} active={item.id === 1}>
          <Notification>
            <Figure>
              <img src={item.foto} alt={`${item.nome} ${item.cargo}`} />
              <i>{Math.floor(Math.random() * 10)}</i>
            </Figure>
          </Notification>

          <ul>
            <li>
              <strong>{item.nome}</strong>
            </li>
            <li>
              <span>{item.cargo}</span>
            </li>
          </ul>
        </BoxShadow>
      ))}
    </Box>
  );
}
