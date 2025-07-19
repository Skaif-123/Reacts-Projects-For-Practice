import { useEffect, useState } from "react";
import "./scroll.css";
export default function Scroll_Indicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scroll_IndicatorPercentage, setScroll_IndicatorPercentage] =
    useState(0);

  // fetching data using async await
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg("You have an error bro ", e.message);
      setLoading(false);
    }
  }

  if (loading) {
    <div>LOADING PLEASE WAIT.........................................</div>;
  }

  if (errorMsg) {
    <div>{errorMsg}</div>;
  }

  useEffect(() => {
    if (data) {
      fetchData(url);
    }
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  function handleScrollPercentage() {
    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.documentElement.clientHeight);

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScroll_IndicatorPercentage((howMuchScrolled / height) * 100);
  }
  console.log(Math.floor(scroll_IndicatorPercentage));

  return (
    <>
      <div className="container">
        <div className="header">
          Custom Scroll using React Js
          <div className="scroll_Indicator">
            <div className="scrollLine" style={{width:`${scroll_IndicatorPercentage}%`}}></div>
          </div>
        </div>
        <div
          className="listItems"
          style={{ fontSize: "3rem", textAlign: "center" }}
        >
          {data && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="label">
                {item.title}
              </div>
            ))
          ) : (
            <div>No Data found</div>
          )}
        </div>
      </div>
    </>
  );
}
