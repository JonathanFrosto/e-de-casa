import styled from "styled-components";
import { Form as GenericForm } from "../../components/Form/style";

export const EditShoppingListContainer = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

export const Form = styled(GenericForm)`
  width: 15rem;
  gap: 0;

  p {
    margin: 0.5rem 0;
  }

`