import { useContext } from "react";
import { ResumeContext } from "./context";
import NavBar from "./components/navBar";
import PotraitDiv from "./components/potraitDiv";
import Resume from "./components/resume";
import Space from "./components/space";
import Education, { Experience } from "./components/educationDiv";
import { AnimatePresence, motion } from "framer-motion";
import { ResumeTitle } from "./components/resume";

const Section1 = ({ children }) => (
  <motion.div
    className="section"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.1 }}
  >
    {children}
  </motion.div>
);

const Section2 = ({ children }) => (
  <motion.div
    className="section"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const Section3 = ({ children }) => (
  <motion.div
    className="section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.1 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <>
      <NavBar />
      <Section1>
        <PotraitDiv />
      </Section1>
      <Space />
      <Section1>
        <ResumeTitle />
      </Section1>
      <Section2>
        <Resume />
      </Section2>
      <ResumeSection />
      <Space />
      <Section1>
        <PotraitDiv />
      </Section1>
    </>
  );
}

function ResumeSection() {
  const { resumeField } = useContext(ResumeContext);

  return (
    <AnimatePresence mode="wait">
      {resumeField === "education" && (
        <Section3 key="education">
          <Education />
        </Section3>
      )}
      {resumeField === "experience" && (
        <Section3 key="experience">
          <Experience />
        </Section3>
      )}
    </AnimatePresence>
  );
}
