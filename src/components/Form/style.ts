import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1rem;

  background-color: ${(props) => props.theme["green-dark"]};
  border-radius: 6px;
`

export const Input = styled.input`
  color: ${(props) => props.theme["pastel-dark"]};
  background-color: ${(props) => props.theme["input-background"]};
  padding: 0.75rem 1rem;
  border-radius: 6px;
`  

interface ButtonProps {
  variant: 'green' | 'orange'
}

export const Button = styled.button<ButtonProps>`
    padding: 0.7rem;
    border-radius: 6px;
    font-weight: 700;
    color: ${(props) => props.theme["pastel-dark"]};
    
    ${(props) => {
      if (props.variant === 'green') {
        return css`
          background-color: ${(props) => props.theme["green-light"]};

          :hover {
            transition: 0.5s;
            background-color: ${(props) => props.theme.green};
          }
        `
      } else {
        return css`
          background-color: ${(props) => props.theme["orange-light"]};

          :hover {
            transition: 0.5s;
            background-color: ${(props) => props.theme["orange-dark"]};
          }
      `
      }
    }}
`

interface ErrorLabelProps {
  visible: boolean
}

export const ErrorLabel = styled.p<ErrorLabelProps>`
  margin: 1.5rem 0;
  color: ${(props) => props.theme["pastel"]};
  visibility: hidden;

  ${(props) => props.visible && css`
    visibility: visible;
  `}
`