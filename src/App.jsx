import React from "react";
import Rate from "./components/rate";

export default function App() {
  return (
    <>
      <Rate title="Score" maxRate={5} />
      <Rate title="Rating" maxRate={5} />
      <Rate title="Performance" maxRate={5} defaultRate={2} />
      <Rate title="Score" maxRate={10} />
      <Rate title="Rating" maxRate={10} />
      <Rate title="Performance" maxRate={10} defaultRate={8} />
    </>
  );
}
