import { useEffect, useState } from "react";
import "./RandomColor.css";

export default function RandomColor() {
  // --------------DECLARATION DONE---------------------------------------------
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // --------------FUNCTION DONE---------------------------------------------
  function Random_Hex_Generator() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexa_value = "#";

    for (let i = 0; i < 6; i++) {
      hexa_value = hexa_value + arr[RandomColorUltilty(arr.length)];
    }
    setColor(hexa_value); 
    setTypeOfColor("hex")
  }

  function Random_Rgb_Generator() {
    const r = RandomColorUltilty(256);
    const g = RandomColorUltilty(256);
    const b = RandomColorUltilty(256);
    setColor(`rgb(${r},${g},${b})`);
    setTypeOfColor("rgb")
  }

  function RandomColorUltilty(length) {
    let number = Math.floor(Math.random() * length);
    return number;
  }

  // using useEffect for  color to change
  useEffect(() => {
    if (typeOfColor == "hex") {
      Random_Hex_Generator();
    } else {
      Random_Rgb_Generator();
    }
  }, [typeOfColor]);
  
  return (
    <>
      <div
        className="main"
        style={{ backgroundColor: color, height: "100vh", width: "100vw" }}
      >
        <h1 className="heading">RandomColor Generator Project</h1>
        <div className="panel">
          <button className="bolor" onClick={() => Random_Hex_Generator()}>
            hexaDecimmal
          </button>
          <button className="bolor" onClick={() => Random_Rgb_Generator()}>
            rgb color
          </button>
          <button
            className="bolor"
            onClick={
              typeOfColor == "hex"
                ? () => Random_Hex_Generator()
                : () => Random_Rgb_Generator()
            }
          >
            generate random color
          </button>
        </div>

        <div className="content">
          <h2>{typeOfColor=="hex"? "HEXADECIMAL":"RGB"}</h2>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}
