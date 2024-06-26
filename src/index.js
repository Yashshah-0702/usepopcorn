import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// import App from './App';
import StarRating from "./StarRating";
import App from "./App";
import Practice from "./Practice";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Practice/> */}
    <App/>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
    {/* <StarRating /> */}
  </React.StrictMode>
);
