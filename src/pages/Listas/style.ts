import styled from "styled-components";
import { ListItem as GenericListItem } from "../../components/ListItem/style";

export const ShoppingListsWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  /* form {
    button {
      margin-top: 1.5rem;
    }
  } */
`
export const ListItem = styled(GenericListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`