import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../../services";
function Product({t}) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getData("/products").then((data) => setdata(data));
  }, []);

  console.log(data);
  return (
    <div>
        <div className="textToChange"> {t("all categories") } </div>
        <div className="textToChange"> {t("Action")} </div> 
    </div>
  );
}

export default Product;
