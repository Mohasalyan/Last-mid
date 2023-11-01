import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Walk from "../../../assets/Walk.webp";
import Read from "../../../assets/Read.webp";
import Squat from "../../../assets/Squat.webp";

const QuitSmoking = () => {
  const loginData = localStorage.getItem("login");
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(null);
  const [localStorageUpdateFlag, setLocalStorageUpdateFlag] = useState(false);

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

    useEffect(() => {
      const localStorageData = JSON.parse(
        localStorage.getItem("tableQuitSmoking")
      );

      const filteredData = localStorageData.find(
        (item, i) => item.status === 0
      );

      setData(filteredData);
      setIndex(localStorageData.findIndex((item) => item.status === 0));
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
      }
    };

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
              </tbody>
            </table>

            <div className="button_Div">
              {data.status === 0 && data.Exercises_status === 1 ? (
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
          <p>No data matching the condition found.</p>
        )}
      </div>
    );
  } else {
    return <Navigate to="/sign-in" />;
  }
};

export default QuitSmoking;
