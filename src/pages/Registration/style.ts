import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 20rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 1rem;
  }

  form {
    /* max-width: 312px; */
    display: flex;
    flex-direction: column;
    
    padding: 2rem 1rem;
    background-color: ${(props) => props.theme["green-dark"]};
    border-radius: 6px;
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
  }

  input + input {
    margin-top: 1.5rem;
  }

  p {
    color: ${(props) => props.theme["pastel"]};
    margin: 1.25rem 0;
    width: 100%;
    flex-grow: 0;
  }


`