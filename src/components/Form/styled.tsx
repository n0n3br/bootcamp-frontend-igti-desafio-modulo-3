import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 30%;
  min-width: 100px;
  padding: 5px;
`;
export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.55em;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  padding: 5px;
  margin-top: 10px;
  width: 100%;
  outline: none;
  :focus {
    border-bottom: 1px solid var(--primary-color);
  }
  transition {
    all: 1s;
  }
`;
