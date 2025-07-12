import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/Star-rating/StarRating";
function App() {
  return (
    <>
      <Accordian />
      <hr className="seperator" />
      <RandomColor />
      <hr className="seperator" />
      <StarRating noOfStars={10} />
      <hr className="seperator" />

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <hr className="seperator" />
    </>
  );
}

export default App;
