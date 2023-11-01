import React from "react";
import { FaSmokingBan } from "react-icons/fa";
import { LiaSmokingBanSolid } from "react-icons/lia";
import { TbSmokingNo } from "react-icons/tb";
import "./information.css";
import ScrollVisibility from "../../ScrollVisibility/ScrollVisibility";

export const info_data = [
  {
    icon: <FaSmokingBan />,
    title: "Short-term health benefits",
    brief_description: "After a week, the heart pumps blood richer in oxygen.",
  },
  {
    icon: <LiaSmokingBanSolid />,
    title: "Short-term health benefits",
    brief_description:
      "After two months, the bones become stronger and their density increases.",
  },
  {
    icon: <TbSmokingNo />,
    title: "Short-term health benefits",
    brief_description:
      "After two and a half months, the skin becomes smoother, the hair is healthier and the teeth are whiter.",
  },
];

const Info = () => {
  return (
    <div className="information">
      <div className="text_information">
        <h2>Rehabilitation of the body after quitting smoking</h2>
        <p>Is it possible for the body to recover after quitting smoking?</p>
      </div>
      <div className="info">
        {info_data.map((info, index) => (
          <ScrollVisibility key={index}>
            <div className="information_item">
              <div>{info.icon}</div>
              <h2>{info.title}</h2>
              <p>{info.brief_description}</p>
            </div>
          </ScrollVisibility>
        ))}
      </div>
    </div>
  );
};

export default Info;
