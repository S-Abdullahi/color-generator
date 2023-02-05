import React, { useState, useEffect } from "react";

export default function SingleColor(props) {
  const [copy, setCopy] = useState(false);
  const { rgb, weight, hex } = props.col;
  const bcg = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopy(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [copy]);
  return (
    <article
      className={`single-color ${props.index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="weight">{weight}%</p>
      <p className="color">{hexValue}</p>
      <p className="copy">{copy && "copy to clipboard"}</p>
    </article>
  );
}
