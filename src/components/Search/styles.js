import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 40px;

  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    margin-bottom: 20px;
  }

  button {
    padding: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border: 0;
    background: #000;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;