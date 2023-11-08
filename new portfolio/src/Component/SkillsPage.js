import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SkillPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Demos.json")
      .then((sre) => sre.json())
      .then((total) => setstate(total));
  });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="skills__name">
        <h1 className="Skills__head" data-aos="flip-up">
          Ski<span>ll</span>s
        </h1>
      </div>
      <main id="SkillPage" className="maincontainer">
        {state.map((a, b) => (
          <>
            <div className="Card__Container ">
              <div class="card" data-aos="fade-up">
                <div class="card-inner">
                  <div class="card-front">
                    <img src={a.img} alt="loding" className="card__images" />
                  </div>
                  <div class="card-back">
                    <div>
                      {" "}
                      <h1>{a.titile}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="titilename" data-aos="flip-right">
              {a.titile}
            </h1>
            <h5 className="usename2">{a.difinition}</h5>
            <p className="usename">{a.use}</p>
            <hr className="text-light" data-aos="flip-left"></hr>
          </>
        ))}
      </main>
    </>
  );
}
