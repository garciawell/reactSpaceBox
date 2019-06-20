import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;

  li {
    padding: 10px 0;
    display: block;
  }
`;

export const LinkMenu = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Img = styled.img`
  color: #fff;
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
  margin-bottom: 25px;
`;
