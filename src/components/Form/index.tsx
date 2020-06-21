import React, { FormEvent } from "react";
import { Wrapper, Input, InputWrapper, Label } from "./styled";

interface Props {
  state: {
    value: number;
    percentage: number;
    months: number;
  };
  onChange: Function;
}

export default ({ state, onChange }: Props) => {
  const { value, percentage, months } = state;
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    onChange(name, value);
  };
  return (
    <Wrapper>
      <InputWrapper>
        <Label>Montante Inicial</Label>
        <Input
          type="number"
          value={value}
          name="value"
          onChange={handleChange}
          autoFocus
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Taxa de juros mensal</Label>
        <Input
          type="number"
          value={percentage}
          name="percentage"
          onChange={handleChange}
          min="-12"
          max="12"
          step="0.01"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Período (meses)</Label>
        <Input
          type="number"
          value={months}
          name="months"
          onChange={handleChange}
        />
      </InputWrapper>
    </Wrapper>
  );
};
