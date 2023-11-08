import React, { useEffect } from "react";
import "./Certificated.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Certificateds() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main id="Certificateds">
        <div className="skills__name m-5 " data-aos="flip-up">
          <h1>
            Certi<span>fi</span>cated
          </h1>
        </div>
        <div className="cardfirst">
          <div className="  col-lg-7 containerogcard">
            <img
              src={require("./asset/Front-End-development.jpg")}
              className="Certificated__page me-5"
              alt="loding"
              data-aos="fade-up"
            />

            <img
              src={require("./asset/Html-MERN.jpg")}
              className="Certificated__page"
              alt="loding"
              data-aos="fade-up"
            />

            <img
              src={require("./asset/Front-End-development.jpg")}
              className="Certificated__page me-5"
              alt="loding"
              data-aos="fade-up"
            />

            <img
              src={require("./asset/Front-End-development.jpg")}
              className="Certificated__page "
              alt="loding"
              data-aos="fade-up"
            />
          </div>
        </div>
      </main>
    </>
  );
}
