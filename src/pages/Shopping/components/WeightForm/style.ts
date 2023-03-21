import styled from "styled-components"
import * as CheckboxRadix from '@radix-ui/react-checkbox'

export const WeightFormContainer = styled.div`
  margin: 0.625rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  input { 
    flex: 1
    /* width: 100%; */
  }
`

export const Checkbox = styled(CheckboxRadix.Root)`
  width: 25px;
  height: 25px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["green-light"]};
`
