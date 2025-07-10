import { useState } from "react";
import "./Accordian.css";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [arr, setArr] = useState([]);
  // ---------------------------------------------------------------------------------------------

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  function handleMultipleSelection(id) {
    let cpy_arr = [...arr];
    const index = cpy_arr.indexOf(id);

    if (index == -1) {
      cpy_arr.push(id);
    } else {
      cpy_arr.splice(index, 1);
    }
    setArr(cpy_arr);
    console.log(arr);
  }

  return (
    <div className="wrapper">
      <h1 className="heading">Accordian Project</h1>
      <button
        onClick={() => {
          setEnableMultipleSelection(!enableMultipleSelection);
          setSelected(null);
          setArr([]);
          console.log(enableMultipleSelection);
        }} 
        className="enableButton"
      >
        {enableMultipleSelection? "Disable Multiple Selection":"Enable Mulltiple Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultipleSelection
                    ? () => {
                        handleMultipleSelection(dataItem.id);
                      }
                    : () => {
                        handleSingleSelection(dataItem.id);
                      }
                }
              >
                <h3>{dataItem.question}</h3>
                <span>🢃</span>
              </div>
              {enableMultipleSelection
                ? arr.indexOf(dataItem.id) !== -1 && (
                    <div className="answers">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && <div className="answers">{dataItem.answer}</div>}
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
}
