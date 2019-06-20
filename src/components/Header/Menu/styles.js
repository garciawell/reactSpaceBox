import styled from 'styled-components';

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
