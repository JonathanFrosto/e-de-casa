import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    
    padding: 2rem 1rem;
    background-color: ${(props) => props.theme["green-dark"]};
    border-radius: 6px;
  }

  input {
    flex: 1 1 0;
    padding: 0.75rem 1rem;
    border-radius: 6px;
  }

  input + input {
    margin-top: 1.5rem;
  }

  p {
    margin: 1.5rem 0;
    color: ${(props) => props.theme["pastel"]};
  }

  a {
    margin-top: 1rem;
  }

  a button {
    width: 100%;
  }
`