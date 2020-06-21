import styled from "styled-components";

interface Props {
  negative: boolean;
}
export const Text = styled.div`
  color: ${(props: Props) => (props.negative ? "red" : "var(--primary-color)")};
  font-weight: bold;
  text-align: right;
`;
