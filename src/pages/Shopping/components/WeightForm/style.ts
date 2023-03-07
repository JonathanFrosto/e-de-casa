import styled from "styled-components"
import * as CheckboxRadix from '@radix-ui/react-checkbox'

export const Checkbox = styled(CheckboxRadix.Root)`
  width: 25px;
  height: 25px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["green-light"]};
`
