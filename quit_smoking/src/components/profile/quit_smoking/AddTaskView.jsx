import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { toast } from "react-toastify";

const AddTaskView = ({ newindex, setLocalStorageUpdateFlag }) => {
  const updateData = (ind) => {
    const updatedData = [...newindex.AddTask];

    updatedData[ind].state = 1;

    const localStorageData = JSON.parse(
      localStorage.getItem("tableQuitSmoking")
    );

    if (localStorageData) {
      localStorageData[newindex.table - 1].AddTask = updatedData;

      localStorage.setItem(
        "tableQuitSmoking",
        JSON.stringify(localStorageData)
      );

      setLocalStorageUpdateFlag((prevFlag) => !prevFlag);

      toast.success("successfully Done.");
    }
  };

  const handleAddTaskChange = (ind) => {
    const updatedData = [...newindex.AddTask];
    updatedData[ind].state = 1;

    updateData(ind, updatedData);
  };

  return (
    <>
      {newindex.AddTask === "" ? (
        <></>
      ) : (
        newindex.AddTask.map((item, ind) => (
          <tr key={ind}>
            <td className="item_inputValue">{item.inputValue}</td>
            <td>
              {item.state === 0 ? (
                <button
                  className="button_Exercises"
                  onClick={() => handleAddTaskChange(ind)}
                >
                  <AiOutlineClose />
                  Done
                </button>
              ) : (
                <button className="button_Exercises Done">
                  <BsCheckLg />
                  Done
                </button>
              )}
            </td>
          </tr>
        ))
      )}
    </>
  );
};

export default AddTaskView;
