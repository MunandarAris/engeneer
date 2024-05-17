import React from "react";

function ButtonIcon({ onClick, icon, className }) {
  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
}

export default ButtonIcon;
