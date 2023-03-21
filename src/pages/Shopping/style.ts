import styled from "styled-components";
import { Form as GenericForm } from "../../components/Form/style";
import { ListItem as GenericListItem } from "../../components/ListItem/style";

export const ShoppingItemsContainer = styled.main`
  display: flex;
  gap: 1.5rem;

  & > div {
    width: 40%;
  }
`

export const PriceContainer = styled.div`
  color: ${(props) => props.theme.white};
  margin-bottom: 1.5rem;
  border-radius: 6px;
  padding: 2rem 1rem;
  font-size: 2rem;

  background-color: ${(props) => props.theme["green-dark"]};
`

export const Form = styled(GenericForm)`
  gap: 0
`

export const ListItem = styled(GenericListItem)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  button {
    justify-self: flex-end;
  }

  line-height: 0;
`