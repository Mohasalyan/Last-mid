import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Walk from "../../../assets/Walk.webp";
import Read from "../../../assets/Read.webp";
import Squat from "../../../assets/Squat.webp";
import AddTask from "./AddTask";
import AddTaskView from "./AddTaskView";
import { toast } from "react-toastify";

const QuitSmoking = () => {
  const loginData = localStorage.getItem("login");
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(null);
  const [localStorageUpdateFlag, setLocalStorageUpdateFlag] = useState(false);
  const [openAddTask, setOpenAddTask] = useState(false);

  if (loginData === "true") {
    const userData = JSON.parse(localStorage.getItem("user_data")) || {};

    const number_cigarettes = userData.number_smoke_daily;

    /////////////////

    const tableQuitSmoking = [];

    const Exercises_data = [
      "Walk for ten minutes",
      "Read for ten minutes",
      "Squat for ten minutes",
    ];

    for (let i = 0; i < number_cigarettes; i++) {
      const randomExercises =
        Exercises_data[Math.floor(Math.random() * Exercises_data.length)];

      tableQuitSmoking.push({
        AddTask: "",
        table: i + 1,
        number_cigarettes: number_cigarettes - i - 1,
        number_cigarettes_status: 0,
        Exercises: randomExercises,
        Exercises_status: 0,
        status: 0,
      });
    }

    if (!localStorage.getItem("tableQuitSmoking")) {
      localStorage.setItem(
        "tableQuitSmoking",
        JSON.stringify(tableQuitSmoking)
      );
    }

    ///////////////////
    const [newindex, setNewindex] = useState(null);

    useEffect(() => {
      const localStorageData = JSON.parse(
        localStorage.getItem("tableQuitSmoking")
      );

      const filteredData = localStorageData.find(
        (item, i) => item.status === 0
      );

      setData(filteredData);
      setIndex(localStorageData.findIndex((item) => item.status === 0));
      setNewindex(filteredData);
    }, [localStorageUpdateFlag]);

    const handleExerciseStatusChange = () => {
      if (data && index !== null) {
        const updatedData = { ...data, Exercises_status: 1 };

        const localStorageData = JSON.parse(
          localStorage.getItem("tableQuitSmoking")
        );

        localStorageData[index] = updatedData;

        localStorage.setItem(
          "tableQuitSmoking",
          JSON.stringify(localStorageData)
        );

        setData(updatedData);

        toast.success("successfully Done.");
      }
    };

    const handleStatusChange = () => {
      if (data && index !== null) {
        const updatedData = { ...data, status: 1 };

        const localStorageData = JSON.parse(
          localStorage.getItem("tableQuitSmoking")
        );

        localStorageData[index] = updatedData;

        localStorage.setItem(
          "tableQuitSmoking",
          JSON.stringify(localStorageData)
        );

        setData(updatedData);

        setLocalStorageUpdateFlag((prevFlag) => !prevFlag);
      }
    };

    const handleCigarettesChange = () => {
      if (data && index !== null) {
        const updatedData = { ...data, number_cigarettes_status: 1 };

        const localStorageData = JSON.parse(
          localStorage.getItem("tableQuitSmoking")
        );

        localStorageData[index] = updatedData;

        localStorage.setItem(
          "tableQuitSmoking",
          JSON.stringify(localStorageData)
        );

        setData(updatedData);

        setLocalStorageUpdateFlag((prevFlag) => !prevFlag);

        toast.success("successfully Done.");
      }
    };

    const handleopenAddTask = () => {
      setOpenAddTask(!openAddTask);
      window.scrollTo(0, 0);
    };

    let successfully_task = "";

    if (data && data.AddTask) {
      const allStatesAreOne = data.AddTask.every((item) => item.state == 1);

      if (
        allStatesAreOne &&
        data.number_cigarettes_status === 1 &&
        data.Exercises_status === 1
      ) {
        successfully_task = "successfully_task";
      }
    } else {
      successfully_task = "New_task";
    }

    return (
      <div className="full_AllExercises">
        {data ? (
          <>
            <h2>
              <FaTasks /> Task List Day {data.table}
            </h2>
            <table className="AllExercises">
              <thead>
                <tr>
                  <th>Tasks</th>
                  <th>The Condition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    Reduce the number of cigarettes to ({" "}
                    {data.number_cigarettes} )
                  </th>
                  <td>
                    {data.number_cigarettes_status === 0 ? (
                      <button
                        className="button_Exercises"
                        onClick={handleCigarettesChange}
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

                <tr>
                  <td className="data_Exercises_img">
                    {data.Exercises === "Walk for ten minutes" ? (
                      <img src={Walk} alt="Walk" />
                    ) : data.Exercises === "Read for ten minutes" ? (
                      <img src={Read} alt="Read" />
                    ) : data.Exercises === "Squat for ten minutes" ? (
                      <img src={Squat} alt="Squat" />
                    ) : (
                      <></>
                    )}

                    {data.Exercises}
                  </td>
                  <td>
                    {data.Exercises_status === 0 ? (
                      <button
                        className="button_Exercises"
                        onClick={handleExerciseStatusChange}
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

                <AddTaskView
                  newindex={newindex}
                  setLocalStorageUpdateFlag={setLocalStorageUpdateFlag}
                />
              </tbody>
            </table>
            <div className="add_task">
              <button className="button_Exercises" onClick={handleopenAddTask}>
                Add Task
              </button>
              <AddTask
                index={newindex.table - 1}
                openAddTask={openAddTask}
                setOpenAddTask={setOpenAddTask}
                setLocalStorageUpdateFlag={setLocalStorageUpdateFlag}
              />
            </div>

            <div className="button_Div">
              {(data.number_cigarettes_status === 1 &&
                data.Exercises_status === 1 &&
                successfully_task === "New_task") ||
              successfully_task === "successfully_task" ? (
                <button
                  className="button_Exercises"
                  onClick={handleStatusChange}
                >
                  Next Day
                </button>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <p>congratulations to end the challenge period to quit smoking</p>
        )}

        <div className="TaskHistory">
          <NavLink className="button_Exercises" to="/task-history">
            Task History
          </NavLink>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/sign-in" />;
  }
};

export default QuitSmoking;
