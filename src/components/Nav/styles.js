import styled from 'styled-components';

export const Container = styled.header`
  background: red;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 22px;
  }

  svg {
    margin-right: 5px;
  }
`;

export const Buttons = styled.div`

  a {
    color: #fff;
    font-weight: 500;
    text-decoration: none;

    & + a {
      margin-left: 5px;
    }
  }
`;