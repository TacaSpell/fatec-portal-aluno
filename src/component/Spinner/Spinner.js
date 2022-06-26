import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div class="Spinner__container">
      <div class="Spinner__content">
        <div class="Spinner__circle">
          <div class="circle"></div>
        </div>
        <div class="Spinner__circle">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );
}