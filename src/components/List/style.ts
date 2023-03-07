import styled from "styled-components";

export const List = styled.ul`
  width: 60%;
  max-height: 391px;
  /* height: 790px; */
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  overflow: auto;
  /* flex-grow: 0; */

  li {
    list-style-type: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: ${(props) => props.theme["green-light"]};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${(props) => props.theme["green"]};
  }
`

export const ListItem = styled.li`
  width: calc(100% - 1rem);
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme["green-light"]};

  border-radius: 6px;

  & + & {
    margin-top: 1.5rem;
  }

  line-height: 1.4;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  svg {
    justify-self: end;
  }
`
