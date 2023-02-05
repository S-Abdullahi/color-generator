import React from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

export default function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("testing");
  }
  return (
    <>
      <section className="header">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="#f15025" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="colors-con">
        
      </section>
    </>
  );
}
