import React, { useState } from "react";
import "./Education.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Educations() {
  useState(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main id="Educations">
        <div>
          <div className="skills__name mt-5">
            <h1 data-aos="flip-up">
              Educa<span>ti</span>ons
            </h1>
          </div>

          <div className="education ">
            <h2 className="head__education m-5"  data-aos="zoom-in-down">May 2023 to Current</h2>
            <h4 className="headtwo__education ">
              Front End Developer @ KGISL micro College, Coimbatore
            </h4>
            <p className="education__para" >
              i will be responsible for a website developement and will be
              taking care of<br></br> the website and maintenace of the hosted
              website
            </p>

            <hr></hr>
          
            <h2 className="head__education m-5"  data-aos="zoom-in-down" >M.Sc Chemistry</h2>
            <h4 className="headtwo__education">LNC Colleage, Dharmapuri</h4>
            <h6>(2021-2023)</h6>

            <hr></hr>

            <h2 className="head__education m-5"  data-aos="zoom-in-down">HSC Science</h2>
            <h4 className="headtwo__education">
              Government Higher Secondary School, Dharmapuri
            </h4>
            <h6>(2018)</h6>

            <hr></hr>

            <h2 className="head__education m-5"  data-aos="zoom-in-down">SSLC</h2>
            <h4 className="headtwo__education">
              Government Higher Secondary School, Dharmapuri
            </h4>
            <h6>(2016)</h6>
          </div>
        </div>
      </main>
    </>
  );
}
