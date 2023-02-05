import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

export default function App() {
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [color, setColor] = useState();
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colorgen = new Values(color);
      setList(colorgen.all(10));
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
    <>
      <section className="header">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={error ? "error" : null}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="colors-con">
        {list.map((col, index) => {
          return <SingleColor key={index} col={col} index={index} />;
        })}
      </section>
    </>
  );
}
