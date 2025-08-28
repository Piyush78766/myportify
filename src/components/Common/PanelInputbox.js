import React from "react";
import "./PanelInputbox.css";

export default function PanelInputbox({title,desc,input=()=>(<></>)}) {
  return (
    <div className="panel-container">
      <div>
        <p className="panel-text-title">{title}</p>
        <p className="panel-text-subtitle">
          {desc}
        </p>
      </div>
      {/* input box */}
      <div className="panel-input">
        {input()}
      </div>
    </div>
  );
}
