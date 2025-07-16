import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import MenuList from "./MenuList";

export default function MenuItem({ item = {} }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(label) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [label]: !displayCurrentChildren[label],
    });
  }
  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menuItem">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaPlus size={25} />
            ) : (
              <FaMinus size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
