import MenuList from "./MenuList"
import "./tree.css"

export default function TreeView({menu=[]}) {
  return (
    <div className="container">
        <MenuList list={menu}/>
    </div>
  )
}
