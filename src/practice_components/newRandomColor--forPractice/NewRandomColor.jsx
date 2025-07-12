import { useState } from "react";
/**
 * ! This module contains less css; so core functionationality can be focussed on.
 * TODO :just for Practice
 */

export default function NewRandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function hex_converter() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex = hex + arr[random_ultility(hex.length)];
    }
    setColor(hex);
    setTypeOfColor("hex");
  }

  function rgb_converter() {
    const r = random_ultility(256);
    const g = random_ultility(256);
    const b = random_ultility(256);
    setColor(`rgb(${r},${g},${b})`);
    setTypeOfColor("rgb");
  }

  const random_ultility = (length) => {
    return Math.floor(Math.random() * length);
  };

  return (
    <>
      <div
        className="main"
        style={{ backgroundColor: color, height: "100vh", width: "100vw" }}
      >
        <div className="panel">
          <button className="bolor" onClick={() => hex_converter()}>
            hex
          </button>
          <button className="bolor" onClick={() => rgb_converter()}>
            rgb
          </button>
          <button
            className="bolor"
            onClick={() => {
              typeOfColor == "rgb" ? rgb_converter() : hex_converter();
            }}
          >
            {
                typeOfColor == "rgb" ? "rgb_converter()" : "hex_converter()"
            }
          </button>
        </div>

        <div className="content">
            <h1>{typeOfColor}</h1>
            <h4>{color}</h4>
        </div>
      </div>
    </>
  );
}
