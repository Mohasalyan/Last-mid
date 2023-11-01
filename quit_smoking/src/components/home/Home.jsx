import React from "react";
import quit_smoking from "../../assets/quit_smoking_1.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AutomaticSlideshow from "./slider/AutomaticSlideshow";
import Info from "./information/Info";

const Home = () => {
  const [info_text] = useTypewriter({
    words: [
      "Over time, the immediate health benefits of abstaining from smoking increase.",
    ],
    typeSpeed: 100,
  });

  return (
    <>
      <div className="container">
        <img src={quit_smoking} alt="quit smoking" />

        <div className="quit_smoking_text">
          <div className="smoking_text">
            <h2 className="text_quit_smoking">Quit Smoking</h2>

            <p className="info_text_quit_smoking">
              {info_text}
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </p>
          </div>
        </div>
      </div>

      <section>
        <Info />
        <AutomaticSlideshow />
      </section>
    </>
  );
};

export default Home;
