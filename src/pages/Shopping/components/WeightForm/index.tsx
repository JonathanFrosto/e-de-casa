import { CheckboxIndicator } from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { useState } from "react";
import { Checkbox } from "./style";

export function WeightForm() {
  const [checked, setChecked] = useState(false);

  function handleCheckedChange(checked: boolean) {
    setChecked(checked);
  }

  return (
    <div >
      <Checkbox id="weight" onCheckedChange={handleCheckedChange}>
        <CheckboxIndicator >
          <Check />
        </CheckboxIndicator>
      </Checkbox>
      <label htmlFor="weight">Pesável?</label>
      <input type="number" style={!checked ? { visibility: "hidden" } : {}} placeholder="Peso" />
    </div>
  )
}