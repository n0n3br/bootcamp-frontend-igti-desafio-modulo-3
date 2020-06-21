import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Portions from "./components/Portions";
interface State {
  value: number;
  months: number;
  percentage: number;
}

export default function App() {
  const [state, setState] = useState<State>({
    value: 0,
    months: 0,
    percentage: 0
  });
  const handleChange = (name: string, value: number) => {
    setState({
      ...state,
      [name]: Number(value)
    });
  };

  return (
    <>
      <Header />
      <Form state={state} onChange={handleChange} />
      <Portions state={state} />
    </>
  );
}
