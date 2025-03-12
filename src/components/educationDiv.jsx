import React from "react";

const educationData = [
  {
    date: "01/2022 - Present",
    title: "BEng (Hons) Software Engineering (Undergraduate)",
    institution:
      "University of Westminster (Informatics Institute of Technology)",
    location: "Colombo, Sri Lanka",
  },
  {
    date: "09/2022 - 12/2022",
    title: "Foundation Certification of Information Technology",
    institution: "Informatics Institute of Technology",
    location: "Colombo, Sri Lanka",
  },
  {
    date: "2012 - 2020",
    title: "GCE Ordinary Level & GCE Advanced Level",
    institution: "Badulla Central College",
    location: "Badulla, Sri Lanka",
  },
];

const EducationItem = ({ date, title, institution, location }) => {
  return (
    <div className="educationSecondDiv">
      <h4 className="educationDate">{date}</h4>
      <div>
        <h4 className="educationTitle">{title}</h4>
        <h5 className="educationInstitution">{institution}</h5>
        <h5 className="educationLocation">{location}</h5>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="educationFullDiv" style={{ height: "45vh" }}>
      <div className="educationMainDiv">
        <div className="educationAllDivs">
          <div className="educationSemiDivs">
            {educationData.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const experianceData = [
  {
    date: "08-2024 - Present",
    title: "Software Engineer Intern",
    company: "Sri Lanka Insurance Corporation Life LTD",
    location: "Colombo, Sri Lanka",
    skills: "Skills : (React Native , React , .NET , SQL)",
  },
];

const ExperianceItem = ({ date, title, company, location, skills }) => {
  return (
    <div className="educationSecondDiv">
      <h4 className="educationDate">{date}</h4>
      <div>
        <h4 className="educationTitle">{title}</h4>
        <h5 className="educationInstitution">{company}</h5>
        <h5 className="educationLocation">{location}</h5>
        <h5 className="educationLocation" style={{ color: "#ff014f" }}>
          {skills}
        </h5>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="educationFullDiv" style={{ height: "45vh" }}>
      <div className="educationMainDiv">
        <div className="educationAllDivs">
          <div className="educationSemiDivs">
            {experianceData.map((item, index) => (
              <ExperianceItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
