import { useContext } from "react";
import "../styles/resume.css";
import { ResumeContext } from "../context";

function Resume() {
  const { resumeField, toogleResumeField } = useContext(ResumeContext);

  return (
    <div className="resumeMainDiv">
      <div className="resumeDiv">
        <div className="resumeTitlesMainDiv">
          {["education", "experience"].map((title) => (
            <div
              key={title}
              onClick={() => toogleResumeField(title)}
              className="resumeTitles"
              style={{
                background:
                  resumeField === title
                    ? "linear-gradient(to right, rgb(20 20 20), rgb(34, 37, 41))"
                    : "transparent",
                borderRadius: "10px",
                boxShadow:
                  resumeField === title ? "0px 0px 15px #fffafa24" : "none",
                transform: resumeField === title ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <h3
                style={{
                  color: resumeField !== title ? "#fff" : "#ff014f",
                  fontWeight: resumeField === title ? "400" : "300",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {title === "education" ? "Education" : "Experience"}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default Resume;
