import React from "react";
import { Wrapper, ValuesWrapper } from "./styled";
import PortionMonth from "../PortionMonth";
import PortionCurrency from "../PortionCurrency";
import PortionPercentage from "../PortionPercentage";

interface Props {
  value: number;
  percentage: number;
  index: number;
}

const formatMoney = (value: number) =>
  value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
    currency: "BRL"
  });

const formatPercentage = (value: number) =>
  value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "percent"
  });

export default ({ value, percentage, index }: Props) => {
  const totalValue = value * (1 + percentage / 100) ** index;
  const increment = totalValue - value;
  const totalPercentage = (totalValue - value) / value;
  return (
    <Wrapper>
      <PortionMonth>
        <p>{index}</p>
      </PortionMonth>
      <ValuesWrapper>
        <PortionCurrency negative={percentage < 0}>
          {formatMoney(totalValue)}
        </PortionCurrency>
        <PortionCurrency negative={percentage < 0}>
          {increment >= 0 ? "+" : ""}
          {formatMoney(increment)}
        </PortionCurrency>
        <PortionPercentage negative={percentage < 0}>
          {formatPercentage(totalPercentage)}
        </PortionPercentage>
      </ValuesWrapper>
    </Wrapper>
  );
};
