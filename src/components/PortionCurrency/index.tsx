import React, { ReactNode } from "react";
import { Text } from "./styled";
interface Props {
  children: ReactNode;
  negative: Boolean;
}
export default ({ children, negative }: Props) => {
  return <Text negative={negative}>{children}</Text>;
};
