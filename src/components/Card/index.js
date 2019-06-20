import React from 'react';
import {
  Container, Box, BoxShadow, Figure,
} from './styles';

export default function Card() {
  return (
    <Container>
      <Box>
        <BoxShadow>
          <Figure>
            <img src={`${process.env.PUBLIC_URL}/images/avatar-alberto.png`} alt="Avatar" />
          </Figure>

          <ul>
            <li>
              <span>Nome: </span>
              <strong>Alberto</strong>
            </li>
            <li>
              <span>Cargo: </span>
              <strong>Presidente</strong>
            </li>
            <li>
              <span>Idade: </span>
              <strong>46</strong>
            </li>
          </ul>
        </BoxShadow>
      </Box>
    </Container>
  );
}
