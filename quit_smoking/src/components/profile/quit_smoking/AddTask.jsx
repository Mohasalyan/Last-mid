import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ScrollVisibility from "./../../ScrollVisibility/ScrollVisibility";
import { toast } from "react-toastify";

const AddTask = ({
  index,
  openAddTask,
  setOpenAddTask,
  setLocalStorageUpdateFlag,
}) => {
  if (!openAddTask) return;

  const handleopenAddClose = () => {
    setOpenAddTask(!openAddTask);
  };

  const [inputValue, setInputValue] = useState("");

  const updateItemInLocalStorage = () => {
    if (inputValue.length >= 1) {

      const localStorageData = JSON.parse(
        localStorage.getItem("tableQuitSmoking")
      );

      const newKey = "AddTask";

      if (
        localStorageData &&
        index !== null &&
        index < localStorageData.length
      ) {
        const itemToUpdate = localStorageData[index];
        if (!itemToUpdate[newKey]) {
          itemToUpdate[newKey] = [];
        }
        itemToUpdate[newKey].push({ inputValue, state: 0 });
        localStorage.setItem(
          "tableQuitSmoking",
          JSON.stringify(localStorageData)
        );
        setInputValue("");
        setLocalStorageUpdateFlag((prevFlag) => !prevFlag);

        handleopenAddClose();

        toast.success("successfully added task.");
      }
    } else {
      toast.error("You must add text.");
    }
  };

  return (
    <div className="full_AddTask">
      <AiOutlineCloseCircle onClick={handleopenAddClose} />
      <ScrollVisibility>
        <div className="AddTask">
          <div className="input_AddTask">
            <div className="form-card">
              <input
                className="form-input"
                type="text"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <label className="form-label" htmlFor="Add_Task">
                Add Task
              </label>
            </div>
            <button
              className="button_Exercises"
              onClick={updateItemInLocalStorage}
            >
              Add
            </button>
          </div>
        </div>
      </ScrollVisibility>
    </div>
  );
};

export default AddTask;
