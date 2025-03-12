import React, { createContext, useState } from "react";

export const ResumeContext = createContext();

export default function ResumeContextProvider({ children }) {
  const [resumeField, setResumeField] = useState("education");

  const toogleResumeField = (field) => {
    setResumeField(field);
  };
  return (
    <ResumeContext.Provider value={{ resumeField, toogleResumeField }}>
      {children}
    </ResumeContext.Provider>
  );
}
