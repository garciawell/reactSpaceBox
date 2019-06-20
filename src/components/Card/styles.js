import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0;
  li {
    padding: 5px 0;
    span {
      text-transform: uppercase;
      min-width: 60px;
      text-align: right;
      display: inline-block;
      margin-right: 10px;
    }
    strong {
      font-size: 15.937767px;
      color: #092432;
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const BoxShadow = styled.div`
  padding: 35px;
  background: #fff;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

export const Figure = styled.figure`
  width: 140px;
  height: 140px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 50px;
  img {
    display: block;
  }
`;
