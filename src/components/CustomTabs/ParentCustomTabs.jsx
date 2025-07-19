import CustomTabs from "./CustomTabs";
import "./tabs.css"
function RandomComponent() {
  return <div>Hello there it's 3rd component</div>;
}

export default function ParentCustomTabs() {
  const tabs = [
    {
      label: "Tab 1",
      content: "Content for Tab 1",
    },
    {
      label: "Tab 2",
      content: "Content for Tab 2",
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentIndex) {
    console.log(currentIndex);
  }

  return (
    <>
      <CustomTabs TabsContent={tabs} onChange={handleChange} />
    </>
  );
}
