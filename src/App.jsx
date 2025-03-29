import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { ResumeContext } from "./context";
import { useInView } from "react-intersection-observer";
import NavBar from "./components/navBar";
import PotraitDiv from "./components/potraitDiv";
import Resume from "./components/resume";
import Space from "./components/space";
import Education, { Experience } from "./components/educationDiv";
import Displayprojects from "./components/projects";
import Contact from "./components/contact";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import SectionTitle from "./components/sectionTitle";
import { updateVisitorCount } from "./firebase";

const TechSkills = lazy(() => import("./components/skills"));

const Section = ({ id, children, animation }) => (
  <motion.div id={id} className="section" {...animation}>
    {children}
  </motion.div>
);

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
  useEffect(() => {
    updateVisitorCount();
  }, []);
  
  const CURSOR_SIZE = 40;
  const [isMobile, setIsMobile] = useState(false);
  const [loadingNum, setLoadingNum] = useState(0);

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

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

      <div id="resume">
        <Space />
        <Section animation={animations.fadeLeft}>
          <SectionTitle title="ACADEMICS & CAREER" />
        </Section>
        <Section animation={animations.fadeScale}>
          <Resume />
        </Section>
        <ResumeSection />
      </div>

      <div id="skills" ref={skillsRef}>
        <Space />
        <Section animation={animations.fadeLeft}>
          <SectionTitle title="TECHNICAL SKILLS" />
        </Section>
        {skillsInView && (
          <Suspense>
            <Section animation={animations.fadeScale}>
              <TechSkills onLoaded={() => setLoadingNum(1)} />
            </Section>
          </Suspense>
        )}
      </div>

      {loadingNum === 1 && (
        <div id="projects">
          <Space />
          <Section animation={animations.fadeLeft}>
            <SectionTitle title="PROJECTS " />
            <Displayprojects />
            {/* </Section>
            <Section animation={animations.fadeScale}> */}
          </Section>
        </div>
      )}
      <div id="contact" className="fakeDiv"></div>
      <div id="contact">
        <Contact />
      </div>
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
