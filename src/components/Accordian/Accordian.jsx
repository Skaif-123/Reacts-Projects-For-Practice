import { useState } from "react";
import "./Accordian.css";
import data from "./data";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const handleClickAccordian = (currentClickId) => {
    console.log(currentClickId);
    setSelected(currentClickId === selected ? null : currentClickId);
  };

  return (
    <>
      <h1 className="AccordianHeading">Accordian Project</h1>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => {
                  handleClickAccordian(dataItem.id);
                }}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div className="answers">
                {selected===dataItem.id?(<div className= {`subsection ${selected === dataItem.id ? 'show' : ''}`}>{dataItem.answer}</div>):null}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </>
  );
}
