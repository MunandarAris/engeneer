import React from "react";
import ButtonIcon from "../atoms/ButtonIcon";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function SearchInput({ value, setValue, onSearch, onClear }) {
  return (
    <div>
      <label className="text-xl text-white font-semibold">Search Task</label>

      <div className="flex items-stretch gap-x-2 mt-2">
        <input
          className="w-full rounded border-none outline-none p-3"
          placeholder="Search Task..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <ButtonIcon
          icon={<IoSearch />}
          className="bg-yellow px-4 rounded"
          onClick={onSearch}
        />
        <ButtonIcon
          icon={<IoMdClose />}
          className="bg-green px-4 rounded"
          onClick={onClear}
        />
      </div>
    </div>
  );
}

export default SearchInput;
