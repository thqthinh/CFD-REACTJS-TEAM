import React from "react";
import "./style.scss";

function TextArea({ label, placeholder }) {
  return (
    <label htmlFor="">
      <div className="label">{label}</div>
      <textarea placeholder={placeholder}></textarea>
    </label>
  );
}

export default TextArea;
