"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";

function ButtonAdd({ onClick }) {
  const { status } = useSelector((state) => state.actions);

  return (
    <button
      data-testid="buttonAdd"
      className="bg-white rounded-full shadow-xl w-14 h-14 flex items-center justify-center relative overflow-hidden"
      onClick={onClick}
    >
      {status == "searchTask" ? (
        <FaPlus size={25} />
      ) : (
        <IoMdArrowRoundBack size={30} />
      )}
    </button>
  );
}

export default ButtonAdd;
