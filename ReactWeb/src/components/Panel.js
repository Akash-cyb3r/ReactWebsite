import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Panel.css";
function Panel() {
  return (
    <div className="panel-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1> BOOKINGS </h1>
      <p>Start your bookings</p>
      <div className="panel-btn">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          VIDEO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Panel;
