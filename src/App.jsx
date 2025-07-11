
import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/Star-rating/StarRating";
function App() {
  return (
      <>
        <Accordian />
        <hr className="seperator"/>
        <RandomColor/>
        <hr className="seperator"/>
        <StarRating noOfStars={10}/>
      </>
  );
}

export default App;
