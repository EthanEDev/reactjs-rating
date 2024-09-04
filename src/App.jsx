import React from "react";
import Rate from "./components/rate";

export default function App() {
  return (
    <>
      <Rate title="Score" maxValue={5} />
      <Rate title="Rating" maxValue={5} />
      <Rate title="Performance" maxValue={5} defaultValue={2} />
      <Rate title="Score" maxValue={10} />
      <Rate title="Rating" maxValue={10} />
      <Rate title="Performance" maxValue={10} defaultValue={8} />
    </>
  );
}
