import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.css";
import ResumeContextProvider from "./context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeContextProvider>
      <App />
    </ResumeContextProvider>
  </StrictMode>
);
