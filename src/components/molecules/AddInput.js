"use client";

import ButtonIcon from "../atoms/ButtonIcon";
import { IoMdSend } from "react-icons/io";

function AddInput({ value, setValue, onClick, isEdit }) {
  return (
    <div>
      <label className="text-xl text-white font-semibold">
        {isEdit ? "Edit Task" : "Add New Task"}
      </label>

      <div className="flex items-stretch gap-x-2 mt-2">
        <input
          className="w-full rounded border-none outline-none p-3"
          placeholder={isEdit ? "Edit Task..." : "Input New Task..."}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <ButtonIcon
          icon={<IoMdSend />}
          onClick={onClick}
          className="bg-yellow px-4 rounded"
        />
      </div>
    </div>
  );
}

export default AddInput;
