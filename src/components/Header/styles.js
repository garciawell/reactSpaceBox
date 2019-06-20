import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(77, 209, 209, 1);
  background: -moz-linear-gradient(
    left,
    rgba(77, 209, 209, 1) 0%,
    rgba(77, 209, 209, 1) 23%,
    rgba(9, 36, 50, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(77, 209, 209, 1)),
    color-stop(23%, rgba(77, 209, 209, 1)),
    color-stop(100%, rgba(9, 36, 50, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(77, 209, 209, 1) 0%,
    rgba(77, 209, 209, 1) 23%,
    rgba(9, 36, 50, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(77, 209, 209, 1) 0%,
    rgba(77, 209, 209, 1) 23%,
    rgba(9, 36, 50, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(77, 209, 209, 1) 0%,
    rgba(77, 209, 209, 1) 23%,
    rgba(9, 36, 50, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(77, 209, 209, 1) 0%,
    rgba(77, 209, 209, 1) 23%,
    rgba(9, 36, 50, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4dd1d1', endColorstr='#092432', GradientType=1 );
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
