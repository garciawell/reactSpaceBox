import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  li {
    color: #fff;
    text-transform: uppercase;
    font-size: 15.937767px;
    padding-right: 65px;
    &:last-child {
      padding-right: 0;
    }
  }
`;

export const LinkMenu = styled(Link)`
  color: #fff;
  text-decoration: none;
  border: 1px solid transparent;
  padding: 10px 15px;
  &:hover {
    border: 1px solid #fff;
  }
  ${props => props.active
    && css`
      border: 1px solid #fff;
    `};
`;
