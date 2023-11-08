import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

export default function About() {
  const Pngfile = "./asset/PRABAVATHI_RESUME";

  function downloadpdf(url) {
    const failename = url.split("/").pop();
    let atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", failename);
    document.body.appendChild(atag);
    atag.click();
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <main className="" id="AboutPage">
        <div className="Container__About About__main">
          <div className="Contant__About" data-aos="fade-right">
            <h1>
              <span>H</span>ello !
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: ["PRABAVATHI M"],
                  autoStart: true,
                  loop: true,
                }}
              ></Typewriter>
            </h1>
            <p>It's my First portfolio Useing React.js</p>

            <div data-aos="fade-left">
              <button className="btn">
                <span
                  class="box"
                  onClick={() => {
                    downloadpdf(Pngfile);
                  }}
                >
                  Download Resume
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
