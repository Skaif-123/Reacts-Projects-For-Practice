import { useState } from "react";
import data from "./data1";

export default function New_Accordian() {
  // --------------------DECLARATION SPACE--------------------------
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [arr, setArr] = useState([]);

  //--------------------FUNCTION SPACE--------------------------

  function handleSingleSelection(CurrentId) {
    setSelected(selected === CurrentId ? null : CurrentId);
    //   console.log(selected);
  }

  function handleMultipleSelection(id) {
    // making a shallow copy of original array
    let rough_arr = [...arr];
    const index_of_current_id = rough_arr.indexOf(id); //index of id in shallow copy
    console.log(index_of_current_id);
    console.log(arr);
    

    if (index_of_current_id == -1) {
      rough_arr.push(id);
    } else {
      rough_arr.splice(index_of_current_id, 1);
    }
    setArr(rough_arr);
  }

  return (
    <>
      <div className="main">
        <button
          className="enableButton"
          onClick={() => {
            setEnableMultipleSelection(!enableMultipleSelection);
            setSelected(null);
            setArr([]);
            console.log(enableMultipleSelection);
          }}
        >
          Enable
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              onClick={
                enableMultipleSelection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="item"
            >
              <div className="question">
                <h2>{dataItem.question} +</h2>
              </div>

              <div className="answers">
                {enableMultipleSelection
                  ? arr.indexOf(dataItem.id) !== -1 && (
                      <div>{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && <div>{dataItem.answer}</div>}
              </div>
            </div>
          ))
        ) : (
          <div>no Data</div>
        )}
      </div>
    </>
  );
}
