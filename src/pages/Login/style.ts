import styled from "styled-components";

export const LoginContainer = styled.div`
  /* width: 100%; */
  /* height: 100vh; */

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
    margin-bottom: 1.5rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
  }

  button {
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["green-light"]};
  }

  button:hover {
    transition: 0.8s;
    background-color: ${(props) => props.theme.green};
  }
`