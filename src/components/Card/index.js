import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container, Box, BoxShadow, Figure,
} from './styles';

export default function Card() {
  const infMerber = useSelector(state => state.persons.data);
  return (
    <Container>
      <Box>
        <BoxShadow>
          <Figure>
            <img src={infMerber.avatar} alt="Avatar" />
          </Figure>

          <ul>
            <li>
              <span>Nome: </span>
              <strong>{infMerber.name}</strong>
            </li>
            <li>
              <span>Cargo: </span>
              <strong>{infMerber.job}</strong>
            </li>
            <li>
              <span>Idade: </span>
              <strong>{infMerber.age}</strong>
            </li>
          </ul>
        </BoxShadow>
      </Box>
    </Container>
  );
}
