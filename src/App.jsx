import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "./context";
import NavBar from "./components/navBar";
import PotraitDiv from "./components/potraitDiv";
import Resume from "./components/resume";
import Space from "./components/space";
import Education, { Experience } from "./components/educationDiv";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ResumeTitle } from "./components/resume";

// Section Component with ID Support
const Section = ({ id, children, animation }) => (
  <motion.div
    id={id} // Apply id for scrolling
    className="section"
    {...animation}
  >
    {children}
  </motion.div>
);

// Animation Presets
const animations = {
  fadeLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: false, amount: 0.1 },
  },
  fadeScale: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 },
  },
  fadeUp: {
    layout: true,
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
    viewport: { once: true, amount: 0.05 },
  },
};

export default function App() {
  const CURSOR_SIZE = 40;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    x.set(e.clientX - CURSOR_SIZE / 2);
    y.set(e.clientY - CURSOR_SIZE / 2);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <NavBar />
      {!isMobile && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
            backgroundColor: "#c4cfde",
            borderRadius: "50%",
            pointerEvents: "none",
            x: smoothX,
            y: smoothY,
            zIndex: 1000,
            opacity: "0.5",
          }}
        />
      )}
      <Section id="home" animation={animations.fadeLeft}>
        <PotraitDiv />
      </Section>
      <div id="resume" >
        <Space  />
        <Section  animation={animations.fadeLeft}>
          <ResumeTitle />
        </Section>
        <Section  animation={animations.fadeScale}>
          <Resume />
        </Section>
        <ResumeSection id="resume" />
      </div>
      <Section animation={animations.fadeUp}>
        <Space />
      </Section>
      
    </div>
  );
}

function ResumeSection() {
  const { resumeField } = useContext(ResumeContext);

  if (!resumeField) return null; 

  return (
    <AnimatePresence mode="wait">
      {resumeField === "education" && (
        <motion.div
          key="education"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Section animation={animations.fadeUp}>
            <Education />
          </Section>
        </motion.div>
      )}
      {resumeField === "experience" && (
        <motion.div
          key="experience"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Section animation={animations.fadeUp}>
            <Experience />
          </Section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
