import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./ImageSlider.css";
export default function ({ url, page = 5, limit = 1 }) {
  /**
   * !Declaration of variables using useState() function
   * * const[images,setImages]=useState([]) contains data coming from API in array format [obj,obj,.....]
   */

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // Using async await func for API call along with try and catch

  async function fetchImages(getUrl) {
    setLoading(true);
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  // more functions handleNext and handlePrevious
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  /**
   * TODO---> using useEffect() function whenever url changes
   */

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  //   What is Loading is true and errormsg is also true
  if (loading) {
    return <div>Loading Please wait!</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Message Occured {errorMsg}</div>;
  }

  console.log(images[0]?.download_url);

  return (
    <>
      <div className="container">
        <div className="heading">ImageSlider(using API's)</div>
        <BsArrowLeftCircle onClick={handlePrevious} className="circleLeft" />

        <div className="box">
          {images && images.length
            ? images.map((imageItem, index) => (
                <img
                  key={imageItem.id}
                  src={imageItem.download_url}
                  alt={imageItem.download_url}
                  className={
                    currentSlide == index
                      ? "current-image"
                      : "current-image hide-image"
                  }
                />
              ))
            : null}
    
        </div>

        <BsArrowRightCircle onClick={handleNext} className="circleRight" />
     
      </div>
       <span className="circleIndicator">
        {images && images.length>0
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator hide-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
      
      
    </>
  );
}
