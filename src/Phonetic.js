import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <span className="audio">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🔊
        </a>
      </span>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
