import React, { useState } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "gmail-js";
import { json } from "react-router-dom";

export default function Contacts() {
  useState(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function Sendgmailprocess() {
    alert("submitted");

    let InputName = document.getElementById("Input__name").value;
    let InputNmuber = document.getElementById("Input__number").value;
    let InputSubject = document.getElementById("Input__Subject").value;
    let InputBody = document.getElementById("Input__Body").value;
    let inputPassword = document.getElementById("Input__password").value;

    let a = [];
    let all = {
      InputBody,
      InputName,
      InputNmuber,
      InputSubject,
      inputPassword,
    };
    a.push(all);

    a("");
    let fristStep = localStorage.setItem("personOne", JSON.toString(a));
    console.log(fristStep);
    let seconstep = localStorage.getItem("personone");
    let b = JSON.parse(seconstep);
    console.log(b);

    if (a == b) {
      alert("done");
    }

    // Email.send({
    //   Host : "smtp.elasticemail.com",
    //   Username : "prabavathi3898@gmail.com",
    //   Password : "prabavathimagesh",
    //   To : 'prabavathi3898@gmail.com',
    //   From : "deepadevaraj06@gmail.com",
    //   Subject : "This is the subject",
    //   Body :  totalinputvalue,
    // }).then(
    // message => alert("your Gmail sen"+message)
    // );
  }
  return (
    <>
      <main id="ContactsPage" className="Container__contact">
        <div>
          <div className="skills__name mt-5">
            <h1 className="Contact__heading" data-aos="flip-up">
              Con<span>t</span>act
            </h1>
          </div>
          <div>
            <form
              className="Contact__formcontainer"
              onSubmit={() => Sendgmailprocess()}
            >
              <div className="Contact__container" data-aos="zoom-out">
                <input
                  type="text"
                  placeholder="Enter  name"
                  id="Input__name"
                  className="input__value"
                  required
                />
              </div>
              <div data-aos="zoom-out">
                <input
                  type="number"
                  placeholder="Enter  phone number"
                  id="Input__number"
                  className="input__value"
                  required
                />
              </div>
              <div data-aos="zoom-out">
                <input
                  type="text"
                  placeholder="Subject"
                  id="Input__Subject"
                  className="input__value"
                  required
                />
              </div>
              <div data-aos="zoom-out">
                <input
                  type="text"
                  placeholder="Body Contant"
                  id="Input__Body"
                  className="input__badycontant"
                  required
                />
              </div>
              <div data-aos="zoom-out">
                <input
                  type="password"
                  placeholder="Enter tha password"
                  id="Input__password"
                  className="input__value text-light"
                  required
                />
              </div>
              <div className="Contact__Button" data-aos="zoom-out">
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="Contact__footer d-flex">
            <div className="Container__footer row">
              <a
                href="https://www.linkedin.com/in/prabavathi-m-5b176227b/"
                target="blank"
              >
                <button className="btn bgbtn text-light">
                  <img
                    width="50"
                    height="50"
                    src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D"
                    alt="linkedin"
                    className="instagram__footer"
                  />
                </button>
              </a>
            </div>
            <div className="Container__footer">
              <a href="https://github.com/prabavathimagesh" target="blank">
                <button className="btn bgbtn text-light">
                  <img
                    width="50"
                    height="50"
                    src="https://www.freecodecamp.org/news/content/images/2021/10/github-on-the-hunt-for-a-new-diversity-lead-developers-techworld-github-universe-png-800_450.png"
                    alt="Github"
                    className="instagram__footer"
                  />
                </button>
              </a>
            </div>
            <div className="Container__footer">
              <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
                <button className="btn bgbtn text-light">
                  <img
                    width="50"
                    height="50"
                    src="https://media.licdn.com/dms/image/D5612AQGzJDVHVRBISw/article-cover_image-shrink_720_1280/0/1684439782639?e=2147483647&v=beta&t=enhrgC5DxCyAUaU2n3E0cgCsvYLmIQWKH-MGHfuvLJA"
                    alt="loding"
                    className="instagram__footer"
                  />
                </button>
              </a>
            </div>
            <div className="Container__footer">
              <a href="https://www.instagram.com/" target="blank">
                <button className="btn bgbtn text-light">
                  <img
                    width="60"
                    height="60"
                    src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/07/28140458/alexander-shatov-71Qk8ODIBko-unsplash.jpg"
                    className="instagram__footer"
                    alt="linkedin"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
