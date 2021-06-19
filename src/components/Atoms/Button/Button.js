import React from "react"
import './Button.css';

function Button({
  bgColor = "btn-orange",
  textColor = "text-white",
  btnSize = "",
  text,
  onClick
}) {
  return (
    <button
      className={`btn px-4 bg-gradient ${bgColor} ${textColor} ${btnSize}`}
      type="button"
      onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
