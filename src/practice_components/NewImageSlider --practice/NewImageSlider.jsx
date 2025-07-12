import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./NewImageSlider.css";

export default function NewImageSlider({ url, page = 1, limit = 5 }) {
  // declare variable
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // async await functions-----------------------------------------------
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
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  //   functions------------------------------------------------------------
  if (loading) {
    return <div>Please wait sir we are loading!!!!!!!!!</div>;
  }

  if (errorMsg) {
    return <div>Error message {errorMsg}</div>;
  }
  //--------------------------------------------------------------------------
  console.log(images);

  function handlePrevious() {
    setCurrentSlide(currentSlide == 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide == images.length - 1 ? 0 : currentSlide + 1);
  }
  //------------------------------------------------------------------------

  return (
    <>
      <div className="container">
        <BsArrowLeftCircle onClick={handlePrevious} className="circleLeft" />
        <div className="box">
          {images && images.length > 0
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
        {images && images.length > 0
          ? images.map((__, index) => (
              <button
              key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator hide-indicator"
                }
                onClick={() => {
                  setCurrentSlide(index);
                }}
              ></button>
            ))
          : null}
      </span>
    </>
  );
}
