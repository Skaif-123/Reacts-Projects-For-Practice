import { useState } from "react";

export default function CustomTabs({ TabsContent, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleOnClick(getcurrentIndex) {
    setCurrentIndex(getcurrentIndex);
    onChange(getcurrentIndex);
  }
  return (
    <>
      <div className="wrapper">
        <div className="heading">
          {TabsContent.map((item, index) => (
            <div
              className={`tab-item ${currentIndex == index ? "active" : null}`}
              onClick={() => handleOnClick(index)}
              key={item.label}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="content">
          {TabsContent[currentIndex] && TabsContent[currentIndex].content}
        </div>
      </div>
    </>
  );
}
