import { CheckboxIndicator } from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../../../../components/Form/style";
import { Checkbox, WeightFormContainer } from "./style";

interface WeightFormProps {
  labelName: string
  placeHolderDescription: string,
  registration: UseFormRegisterReturn<string>
}

export function WeightForm({labelName, placeHolderDescription, registration} : WeightFormProps) {
  const [checked, setChecked] = useState(false);

  function handleCheckedChange(checked: boolean) {
    setChecked(checked);
  }

  return (
    <WeightFormContainer >
      <Checkbox id="input" onCheckedChange={handleCheckedChange}>
        <CheckboxIndicator >
          <Check />
        </CheckboxIndicator>
      </Checkbox>
      <label htmlFor="input">{labelName}</label>
      <Input {...registration} type="number" style={!checked ? { visibility: "hidden" } : {}} placeholder={placeHolderDescription} />
    </WeightFormContainer>
  )
}