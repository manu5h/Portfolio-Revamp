import { useState, useEffect } from "react";
import flutterIcon from "../assets/icons8-flutter.svg";
import reactNativeIcon from "../assets/logo-react-svgrepo-com.svg";
import reactIcon from "../assets/icons8-react.svg";
import angularIcon from "../assets/angular-icon.svg";
import nodejsIcon from "../assets/node-js-icon.svg";
import boostrapIcon from "../assets/bootstrap-5-logo-icon.svg";
import springBootIcon from "../assets/spring-boot-icon.svg";
import sqlIcon from "../assets/sql-database-generic-svgrepo-com.svg";
import python from "../assets/python-programming-language-icon.svg";
import javaScript from "../assets/javascript-programming-language-icon.svg";
import java from "../assets/java-programming-language-icon.svg";
import figma from "../assets/figma-1-logo-svgrepo-com.svg";
import lightroom from "../assets/adobe-lightroom-icon.svg";
import premier from "../assets/adobe-premiere-pro-icon.svg";
import afterEffect from "../assets/adobe-after-effects-icon.svg";
import "../styles/skills.css";

const TechSkills = ({ onLoaded }) => {
  const [delays, setDelays] = useState([]);

  useEffect(() => {
    if (onLoaded) {
      onLoaded();
    }
  }, [onLoaded]);

  useEffect(() => {
    const randomDelays = Array(15)
      .fill()
      .map(() => `${Math.random() * 1.5}s`); 
    setDelays(randomDelays);
  }, []);

  const skills = [
    { name: "Flutter", url: flutterIcon },
    { name: "React Native", url: reactNativeIcon },
    { name: "React", url: reactIcon },
    { name: "Angular", url: angularIcon },
    { name: "Node.js", url: nodejsIcon },
    { name: "Spring Boot", url: springBootIcon },
    { name: "Bootstrap", url: boostrapIcon },
    { name: "SQL", url: sqlIcon },
  ];

  const programming = [
    { name: "Python", url: python },
    { name: "Java", url: java },
    { name: "Java Script", url: javaScript },
  ];

  const design = [
    { name: "Figma", url: figma },
    { name: "Light Room", url: lightroom },
    { name: "Premiere Pro", url: premier },
    { name: "After Effect", url: afterEffect },
  ];

  return (
    <div className="skillsMainDiv">
      <div className="leftSection">
        <h4 style={{ color: "#c4cfde", textAlign: "center", fontWeight: "normal" }}>Web & Mobile</h4>
        <div className="skillsRow">
          {skills.slice(0, 4).map((skill, index) => (
            <div
              key={index}
              className="skillslogoDiv"
              style={{ animationDelay: delays[index] }}
            >
              <img src={skill.url} alt={skill.name} width="50" height="50" />
              <p style={{ color: "#c4cfde", fontSize: "0.8rem" }}>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="skillsRow">
          {skills.slice(4, 8).map((skill, index) => (
            <div
              key={index}
              className="skillslogoDiv"
              style={{ animationDelay: delays[index + 4] }}
            >
              <img src={skill.url} alt={skill.name} width="50" height="50" />
              <p style={{ color: "#c4cfde", fontSize: "0.8rem" }}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rightSection">
        <div className="rightSectionTop">
          <h4 style={{ color: "#c4cfde", textAlign: "center", fontWeight: "normal" }}>Programming</h4>
          <div className="skillsRow">
            {programming.map((skill, index) => (
              <div
                key={index}
                className="skillslogoDiv"
                style={{ animationDelay: delays[index + 8] }}
              >
                <img src={skill.url} alt={skill.name} width="50" height="50" />
                <p style={{ color: "#c4cfde", fontSize: "0.8rem" }}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rightSectionDown">
          <h4 style={{ color: "#c4cfde", textAlign: "center", fontWeight: "normal" }}>Design</h4>
          <div className="skillsRow">
            {design.map((skill, index) => (
              <div
                key={index}
                className="skillslogoDiv"
                style={{ animationDelay: delays[index + 11] }}
              >
                <img src={skill.url} alt={skill.name} width="50" height="50" />
                <p style={{ color: "#c4cfde", fontSize: "0.8rem" }}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
