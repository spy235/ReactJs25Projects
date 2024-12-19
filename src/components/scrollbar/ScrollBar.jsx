import { useEffect, useState } from "react";
import "./style.css";

export default function ScrollIndicator({ url="https://dummyjson.com/products?limit=100" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    //0 3072.800048828125 3860 787



    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;//3072.800048828125

      //The scrollHeight property returns the height of an element including padding, but excluding borders, scrollbars, or margins.
      //The clientHeight property returns the viewable height of an element in pixels, including padding, but not the border, scrollbar or margin.
      //The scrollTop property sets or returns the number of pixels an element's content is scrolled vertically.

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;//3860-787=3073
    setScrollPercentage((howMuchScrolled / height) * 100);// 3072.800/3073 = 0.9996745850959974*100 = 99.96%
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

//   console.log(data, scrollPercentage);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}