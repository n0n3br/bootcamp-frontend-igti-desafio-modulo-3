import styled from "styled-components";

interface Props {
  negative: boolean;
}
export const Text = styled.div`
  color: ${(props: Props) => (props.negative ? "red" : "lightblue")};
  font-size: 0.75em;
  text-align: right;
`;
