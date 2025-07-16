import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  console.log(list);
  
  return (
    <ul className="MenuList">
      {list && list.length
        ? list.map((listItem) => <MenuItem key={listItem.label} item={listItem} />)
        : null}
    </ul>
  );
}
