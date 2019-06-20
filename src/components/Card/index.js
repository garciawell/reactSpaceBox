import React from 'react';
import avatar from "assets/images/avatar-alberto.png"
import { Container } from './styles';

export default function Card() {
  return (
  <Container>
    <img src={avatar} alt={`Avatar ${}`}/>

    <ul></ul>

    Nome
    Cargo
    Idade
  </Container>);
}
