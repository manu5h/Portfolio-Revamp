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
          <div style={{ paddingLeft: "20px" }}>
            <h2
              style={{
                color: "#878E99",
                textAlign: "start",
                fontSize: "60px",
                margin: 0,
              }}
            >
              Hi, I’m
            </h2>
            <h2
              style={{
                color: "#FF014F",
                textAlign: "start",
                fontSize: "75px",
                margin: 0,
              }}
            >
              Manusha
            </h2>
            <h2
              style={{
                color: "#FF014F",
                textAlign: "start",
                fontSize: "75px",
                margin: "0 0 10px 0",
              }}
            >
              Upekshana
            </h2>
            <ReactTyped
              strings={[
                "Mobile Developer",
                "Software Engineer Undergraduate",
                "UI/UX Designer",
                "Web Developer",
                "Video Editor",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=" |"
              showCursor={true}
              style={{ color: "#C4CFDE", fontSize: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotraitDiv;
