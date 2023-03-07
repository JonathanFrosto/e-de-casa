import styled from "styled-components";


export const Header = styled.header`
  margin-bottom: 6rem;

  h1 {
    font-size: 4rem;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Container = styled.main`
  display: flex;
  gap: 1.5rem;
`

export const PriceContainer = styled.div`
  color: ${(props) => props.theme.white};
  margin-bottom: 1.5rem;
  border-radius: 6px;
  padding: 1rem 1.5rem;
  font-size: 2rem;


  background-color: ${(props) => props.theme["green-dark"]};
  
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 1.25rem 1.5rem;
  background-color: ${(props) => props.theme["green-dark"]};

  input {
    flex: 1;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    /* color: #fff; */
    color: ${(props) => props.theme["pastel-dark"]};
    background-color: ${(props) => props.theme["input-background"]};
  }

  div {
    margin: 0.625rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const AddButton = styled.button`
  font-weight: bold;
  margin-top: 2rem;
  padding: 0.75rem 0;
  width: 100%;
  border-radius: 6px;

  color: ${(props) => props.theme["pastel-dark"]};
  background-color: ${(props) => props.theme.orange};

  :hover {
    transition: background-color 0.4s;
    background-color: ${(props) => props.theme["orange-light"]};
  }
`
