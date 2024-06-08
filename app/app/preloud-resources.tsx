"use client";
import ReactDOM from "react-dom";

function PreloadResources() {
  ReactDOM.preload("./sprite.svg", {
    as: "image",
  });

  return null;
}

export default PreloadResources;
