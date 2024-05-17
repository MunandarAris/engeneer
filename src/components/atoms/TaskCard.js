"use client";

import { FaRegSquareCheck } from "react-icons/fa6";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import ButtonIcon from "./ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteTask,
  isDoneTask,
  setIsAddTask,
  setIsEditTask,
} from "@/lib/actions";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function TaskCard({ key, title, isDone, id }) {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.actions);

  const handleChecklist = () => {
    dispatch(isDoneTask(id));
  };

  const MySwal = withReactContent(Swal);
  const handleDelete = () => {
    MySwal.fire({
      title: "Do you want to remove this task?",
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor: "#10A8E5",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Task succesfully removed", "", "success");
        dispatch(handleDeleteTask(id));
        status == "editTask" && dispatch(setIsAddTask());
      }
    });
  };

  const handleEdit = () => {
    dispatch(
      setIsEditTask({
        id,
        task: title,
        isDone,
      })
    );
  };

  return (
    <div
      key={key}
      className="border-b border-primary py-3 px-1 flex items-start justify-between items-center"
    >
      <span
        className={`${
          isDone && "line-through"
        } font-semibold w-[75%] break-words`}
      >
        {title}
      </span>

      <div className="flex items-center gap-x-2">
        {isDone ? (
          <>
            <span className="bg-green text-white text-xs font-semibold p-2 rounded-full">
              DONE
            </span>
            <ButtonIcon
              icon={
                <MdDeleteOutline size={25} fill="red" onClick={handleDelete} />
              }
            />
          </>
        ) : (
          <>
            <ButtonIcon
              icon={<FaRegSquareCheck size={20} />}
              onClick={handleChecklist}
            />
            <ButtonIcon
              icon={<MdOutlineEdit size={25} onClick={handleEdit} />}
            />
            <ButtonIcon
              icon={<MdDeleteOutline size={25} fill="red" />}
              onClick={handleDelete}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
