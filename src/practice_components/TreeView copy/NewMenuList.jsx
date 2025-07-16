import NewMenuItem from "./NewMenuItem";

export default function NewMenuList({list = []}) {
  return (
    <ul className="MenuList">
      {list && list.length > 0
        ? list.map((listItem) => <NewMenuItem key={listItem.label} item={listItem} />)
        : null}
    </ul>
  );
}
