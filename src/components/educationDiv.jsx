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
    <div className="educationMainDiv">
      <div className="educationAllDivs">
        <div className="educationSemiDivs">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
