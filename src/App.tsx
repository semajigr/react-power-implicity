import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import "./app.scss";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
    </div>
  );
};
