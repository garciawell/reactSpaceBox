import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Box = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  li {
    strong {
      font-size: 18px;
      color: #092432;
    }
  }
`;

export const BoxShadow = styled.div`
  padding: 35px;
  background: props => #f0f1ef;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  width: 460px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #ddd;
  }
  ${props => props.active
    && css`
      background: #002b50;
      cursor: default;
      &:hover {
        background: #002b50;
      }
    `};
  li {
    ${props => props.active
      && css`
        color: #fff;
      `};
    strong {
      ${props => props.active
        && css`
          color: #fff;
        `};
    }
  }
`;

export const Figure = styled.figure`
  width: 140px;
  height: 140px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 25px;
  img {
    display: block;
  }
`;

export const Notification = styled.div`
  position: relative;
  display: inline-block;
  i {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #4dd2d2;
    color: #092331;
    font-weight: bold;
    font-style: normal;
    position: absolute;
    top: 5px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
