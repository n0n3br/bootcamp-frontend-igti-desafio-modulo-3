import React, { ReactNode } from "react";
import { Text } from "./styled";

interface Props {
  children: ReactNode;
}
export default ({ children }: Props) => {
  return <Text>{children}</Text>;
};
