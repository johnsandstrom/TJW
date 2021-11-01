import React, { useState } from "react";
import './InfoBox.css';


function InfoBox(props) {

  return (
    <div className="infobox">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default InfoBox;
