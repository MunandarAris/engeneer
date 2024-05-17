"use client";

import Header1 from "../atoms/Header1";
import AddInput from "../molecules/AddInput";
import GreatingCard from "../molecules/GreatingCard";
import SearchInput from "../molecules/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Sekeleton from "../atoms/Sekeleton";
import {
  addTask,
  editTask,
  handleClearSearch,
  handleSearchData,
  setIsAddTask,
} from "@/lib/actions";

function TopComponent() {
  const { status, tasks, edit } = useSelector((state) => state.actions);
  const [task, setTask] = useState("");
  const MySwal = withReactContent(Swal);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const variantsSearchTask = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -500, opacity: 0 },
    initial: { x: -500, opacity: 0 },
  };

  const variantsAddTask = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 500, opacity: 0 },
    initial: { x: 500, opacity: 0 },
  };

  const handleSubmitTask = () => {
    if (!task) {
      return MySwal.fire({
        icon: "error",
        text: "Please insert your task",
      });
    }

    const tempData = [
      { task: task, isDone: false, id: Math.random() * 100 },
      ...tasks,
    ];

    if (status == "addTask") {
      dispatch(addTask(tempData));
    } else {
      dispatch(editTask(task));
      dispatch(setIsAddTask());
    }

    setTask("");
    return MySwal.fire({
      icon: "success",
      text: "Success",
    });
  };

  useEffect(() => {
    setTask(edit?.task);
  }, [edit]);

  useEffect(() => {
    if (status != "editTask") {
      setTask("");
    }

    setSearchValue("");
    dispatch(handleClearSearch());
  }, [status]);

  const handleOnSearch = () => {
    dispatch(handleSearchData(searchValue));
    setSearchValue("");
  };

  const handleClear = () => {
    dispatch(handleClearSearch());
  };

  return (
    <div
      data-testid="topComponent"
      className="bg-primary rounded-t-3xl pt-5 overflow-hidden"
    >
      <Header1 className="font-bold text-center text-3xl pb-5 text-white">
        Todo APP
      </Header1>
      <div className="pb-5">
        <GreatingCard isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>

      <div className="px-5 h-52 relative">
        {isLoading ? (
          <Sekeleton className="!h-20" />
        ) : (
          <AnimatePresence>
            {status == "searchTask" && (
              <motion.div
                variants={variantsSearchTask}
                initial="initial"
                exit="hidden"
                transition={{ transition: 0.2, delay: 0.1 }}
                animate="visible"
                key="searchTask"
                className="absolute w-[90%]"
              >
                <SearchInput
                  value={searchValue}
                  setValue={setSearchValue}
                  onSearch={handleOnSearch}
                  onClear={handleClear}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <AnimatePresence>
          {(status == "addTask" || status == "editTask") && (
            <motion.div
              variants={variantsAddTask}
              initial="initial"
              exit="hidden"
              transition={{
                delay: 0.1,
                transition: 0.2,
              }}
              animate="visible"
              key="addTask"
              className="absolute w-[90%]"
            >
              <AddInput
                value={task}
                setValue={setTask}
                onClick={handleSubmitTask}
                isEdit={status == "editTask" ? true : false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TopComponent;
