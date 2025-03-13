import React from "react";
import img from "../assets/potrait.png";
import "../styles/potraitPart.css";
import { ReactTyped } from "react-typed";

function PotraitDiv() {
  return (
    <div className="portaitMainDiv">
      <div className="portraitImg">
        <img src={img} />
      </div>
      <div className="portraitTextDiv">
        <div>
          <div style={{ paddingLeft: "5%", width: "100%" }}>
            <h2
              style={{
                color: "#878E99",
                textAlign: "start",
                fontSize: "5vw",
                margin: 0,
              }}
            >
              Hi, I’m
            </h2>
            <h2
              className="firstNameText"
              style={{
                color: "#FF014F",
                textAlign: "start",
                margin: 0,
              }}
            >
              Manusha
            </h2>
            <h2
              className="firstNameText"
              style={{
                color: "#FF014F",
                textAlign: "start",
                margin: "0 0 5px 0",
              }}
            >
              Upekshana
            </h2>
            <ReactTyped
              strings={[
                "SE Undergraduate",
                "Mobile Developer",
                "Web Developer",
                "UI/UX Designer",
                "Video Editor",
              ]}
              typeSpeed={100}
              loop
              className="animatedSkills"
              backSpeed={20}
              cursorChar=" |"
              showCursor={true}
              style={{ color: "#C4CFDE" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotraitDiv;
