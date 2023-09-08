import React, { useEffect } from "react";
import { Translation } from "react-i18next";
import "../src/Components/i18n/i18n";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import "./App.css";

const App = () => {
  return <Translation>{(t) => <HomePage t={t} />}</Translation>;
};
//  <Route></Route>
export default App;
