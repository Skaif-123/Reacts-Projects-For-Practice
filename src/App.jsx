import "./App.css";
import Scroll_Indicator from "./components/Scroll_Indicator/Scroll_Indicator";
// import LightDarkModeConverter from "./components/light-dark-mode/LightDarkModeConverter";
// import LoadMoreData from "./components/LoadMoreButton/LoadMoreData";
// import QrCodeGenerator from "./components/QrCode Generator/QrCodeGenerator"
// import Accordian from "./components/Accordian/Accordian";
// import ImageSlider from "./components/ImageSlider/ImageSlider";
// import LoadMoreData from "./components/LoadMoreButton/LoadMoreData";
// import RandomColor from "./components/RandomColor/RandomColor";
// import StarRating from "./components/Star-rating/StarRating";
// import TreeView from "./components/TreeView/TreeView";
// import data from "./components/TreeView/data.js";
function App() {
  return (
    // <>
    //   <Accordian />
    //   <hr className="seperator" />
    //   <RandomColor />
    //   <hr className="seperator" />
    //   <StarRating noOfStars={10} />
    //   <hr className="seperator" />

    //   <ImageSlider
    //     url={"https://picsum.photos/v2/list"}
    //     page={"1"}
    //     limit={"10"}
    //   />
    //   <hr className="seperator" />
    // <LoadMoreData url={"https://dummyjson.com/products"}/>
    // <QrCodeGenerator/>
    // <LightDarkModeConverter />
    <>
    <Scroll_Indicator url={"https://dummyjson.com/products"}/>
      </>
  );
}

export default App;
