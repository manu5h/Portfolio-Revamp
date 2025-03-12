import { useState } from "react";
import "../styles/resume.css";

function Resume() {
  const [activeTitle, setActiveTitle] = useState("education");

  return (
    <div className="resemeMainDiv">
      <div className="resumeDiv">
        <div className="resumeTitlesMainDiv">
          {["education", "skills", "experience"].map((title) => (
            <div
              key={title}
              onClick={() => setActiveTitle(title)}
              className="resumeTitles"
              style={{
                background:
                  activeTitle === title
                    ? "linear-gradient(to right, rgb(20 20 20), rgb(34, 37, 41))"
                    : "transparent",
                borderRadius: "10px",
                boxShadow:
                  activeTitle === title ? "0px 0px 15px #fffafa24" : "none",
                transform: activeTitle === title ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <h3
                style={{
                  color: activeTitle !== title ? "#fff" : "#ff014f",
                  fontWeight: activeTitle === title ? "400" : "300",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {title === "education"
                  ? "Education"
                  : title === "skills"
                  ? "Professional Skills"
                  : "Experience"}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <h3>next part</h3>
    </div>
  );
}

export const ResumeTitle = () => {
 return <h3 className="resumeheading">My Resume</h3>;
};

export default Resume;
