import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;

  @media (max-width: 767px) {
    padding-top: 90px;
  }
`;

export const Container = styled.div`
  padding: 100px 0;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
