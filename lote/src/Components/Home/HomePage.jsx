import React, { useEffect } from "react";
import Header from "../Layouts/Header.jsx";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  // const dispatch = useDispatch();
  useEffect(() => {}, []);
  const listProduct = useSelector((state) => {
    return state;
  });
  console.log(listProduct);
  return (
    <>
      <Header />
      
    </>
  );
}

export default HomePage;
