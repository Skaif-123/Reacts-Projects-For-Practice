import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import NewMenuList from "./NewMenuList";
export default function NewMenuItem({item={}}) {
const[displayChildren,setDisplayChildren]=useState({});

 function handleToggleChildren(label){
  setDisplayChildren({
    ...displayChildren,[label]:!displayChildren[label]
  })
}
console.log(displayChildren);
  
  return (
    <>
    <li>
      <div className="menuItem">
      <p>{item.label}</p>

{item && item.children && item.children.length ?
      <span onClick={()=>handleToggleChildren(item.label)}>
       { displayChildren[item.label]? <FaPlus color="#fff" size={23}/>:<FaMinus  color="#fff"  size={23}/>}
      </span>
      :null}
    
      </div>

    {item && item.children && item.children.length&& displayChildren[item.label]
    ?(<NewMenuList list={item.children}/>)
      :null}
    </li>

    </>
  )
}
