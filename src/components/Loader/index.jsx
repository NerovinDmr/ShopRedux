import React from "react";
import "./styles/loader.scss";
export default function Loader() {
  // const loaderArr =[]
  // loaderArr.length=10
  // const lodertoMap =[...loaderArr]
  return (
    <div className="LoaderWrapper">
      <div className="cs-loader">
        <div className="cs-loader-inner">
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
        </div>
      </div>
    </div>
  );
}
