import React from "react";
import "./SpinnerV2.css";

export default function SpinnerV2({ darkMode }) {
  return (
    <div className={`SpinnerV2__container${darkMode ? ' SpinnerV2__container--dark' : ''}`}>
      <span className={`loader${darkMode ? ' loader--dark' : ''}`}></span>
    </div>
  );
}