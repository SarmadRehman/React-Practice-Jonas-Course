import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./AppV1";
import AppV2 from "./AppV2";
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppV2 />
    {/* <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      size={25}
      color="pink"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
