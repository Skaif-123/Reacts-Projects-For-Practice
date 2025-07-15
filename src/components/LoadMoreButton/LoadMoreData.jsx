import { useEffect, useState } from "react";
import "./LoadMoreButton.css";

export default function LoadMoreData({ url }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  async function retriveProducts(getUrl) {
    try {
      const response = await fetch(
        `${getUrl}?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {retriveProducts(url)}, [count]);
  useEffect(()=>{
    if(products.length===100){
        setDisabledButton(true);
    }
  },[products])
  return (
    <div className="main">
      <div className="heading">Load More Content</div>
      <div className="container">
        {products && products.length
          ? products.map((productItem, index) => (
              <div key={index} className="productBox">
                <img
                  src={productItem.thumbnail}
                  className="settingImage"
                  alt={productItem.thumbnail}
                />
                <p>{productItem.title}</p>
              </div>
            ))
          : null}
      </div>

      <div className="buttonLoader">
        <button
          type="button"
          disabled={disabledButton}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Load next
        </button>
        {disabledButton?(<div style={{color:'red'}}>100 Item shown no more content</div>):null}
      </div>
    </div>
  );
}
