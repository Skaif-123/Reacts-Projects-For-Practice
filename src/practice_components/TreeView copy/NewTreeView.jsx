import NewMenuList from "./NewMenuList";
import "./tree.css";
export default function NewTreeView({ menu = [] }) {
  
  
  return (
    <div className="container">
      <NewMenuList list={menu} />
    </div>
  );
}
