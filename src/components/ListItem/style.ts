import styled from "styled-components";

export const ListItem = styled.li`
  border-radius: 6px;
  width: calc(100% - 1rem);
  padding: 1rem 1.5rem;
  
  background-color: ${(props) => props.theme["green-light"]};
  color: ${(props) => props.theme["green-dark"]};

  & + & {
    margin-top: 1.5rem;
  }

  line-height: 1.4;

  span {
    font-weight: bold;
  }

  button {
    color: ${(props) => props.theme["green-dark"]};
    background-color: transparent;
  }

  svg {
    line-height: 0;
  }

`