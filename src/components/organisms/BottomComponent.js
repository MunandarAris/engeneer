"use client";

import { useDispatch, useSelector } from "react-redux";
import ButtonAdd from "../atoms/ButtonAdd";
import TaskCard from "../atoms/TaskCard";
import { setIsAddTask, setIsSearchTask } from "@/lib/actions";
import Header1 from "../atoms/Header1";

function BottomComponent() {
  const dispatch = useDispatch();
  const { status, tasks, searchResult, isSearch } = useSelector(
    (state) => state.actions
  );

  const handleAddTask = () => {
    dispatch(status == "searchTask" ? setIsAddTask() : setIsSearchTask());
  };

  return (
    <div
      data-testid="bottomComponent"
      className="h-[500px] bg-white -mt-20 rounded-3xl shadow-md py-2 relative overflow-hidden"
    >
      <div className="bg-primary w-20 h-2 rounded mx-auto" />
      <div className="h-[410px] py-5 px-4 flex flex-col gap-y-3 overflow-y-scroll mt-1">
        {tasks?.length > 0 ? (
          (isSearch ? searchResult : tasks)?.map((item, key) => {
            const { task, isDone, id } = item;
            return <TaskCard key={key} title={task} isDone={isDone} id={id} />;
          })
        ) : (
          <div className="flex flex-col items-center justify-center mt-10">
            <img src="/image.svg" width={200} />
            <Header1 className="font-bold mt-4 text-lg text-yellow">
              ...No Task Here...
            </Header1>
          </div>
        )}
      </div>

      <div className="bg-primary h-[75px] flex justify-center items-center">
        <ButtonAdd onClick={handleAddTask} />
      </div>
    </div>
  );
}

export default BottomComponent;
