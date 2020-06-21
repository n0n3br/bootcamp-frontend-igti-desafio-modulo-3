import React from "react";
import { Wrapper } from "./styled";
import Portion from "../Portion";

interface Props {
  state: {
    value: number;
    percentage: number;
    months: number;
  };
}

export default ({ state }: Props) => {
  const { value, percentage, months } = state;
  const monthsArray = Array.from(Array(months), (_, i) => i + 1);
  return (
    <Wrapper>
      {monthsArray.map(index => (
        <Portion
          key={index}
          index={index}
          value={value}
          percentage={percentage}
        />
      ))}
    </Wrapper>
  );
};
