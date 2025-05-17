import { useState, useEffect } from "react";
import shapeShift from "../assets/ShapeShift featured graphic.jpg";
import movieRadar from "../assets/movie radar.jpg";
import coinCeeper from "../assets/coin keeper featured graphic.jpg";
import laundroMate from "../assets/laundro mate.jpg";
import iitc from "../assets/student mangement system.jpg";
import pixilla from "../assets/pixia cover image.jpg";
import exprenceTracker from "../assets/expence tracker.jpg";
import { DesktopOutlined, MobileOutlined, LinkOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import "../styles/projects.css";

const Displayprojects = () => {
  const projectsList = [
    {
      name: "ShapeShift",
      description:
        "ShapeShift is a fitness management mobile app. This app simplifies gym routines and facilitates connections with gyms and certified fitness instructors.	",
      image: shapeShift,
      technologies: "Flutter | Spring Boot | TensorFlow(Python) | AWS",
      link: null,
      category: "mobile",
    },
    {
      name: "Movie Radar",
      description: "Movie Radar is a movie recommendation web app. It allows users to discover movies based on genres, ratings, and personalized suggestions.",
      image: movieRadar,
      technologies: "React | TMDb & OMDb Open APIs",
      link: "https://movieradarlk.netlify.app/",
      category: "web",
    },
    {
      name: "Coin Ceeper",
      description: "Coin Keeper is a personal finance management application. It helps users efficiently track their expenses, manage budgets, and analyze spending patterns.",
      image: coinCeeper,
      technologies: "Flutter",
      link: 'https://drive.usercontent.google.com/download?id=1ZDa0twI0HF42O6ufs-ME0ixCzFThf819&export=download&authuser=0',
      category: "mobile",
    },
    {
      name: "LaundroMate",
      description: "LaundroMate is a seamless platform that connects users, laundries, and delivery riders. It streamlines the laundry process by managing orders, tracking deliveries, and coordinating between all three roles efficiently. ",
      image: laundroMate,
      technologies: "React | Node js | SQL",
      link: null,
      category: "web",
    },
    {
      name: "IITC Student management System",
      description: "This web application is designed for university administrators to efficiently manage student data. It provides a centralized platform to store, organize, and update student information.",
      image: iitc,
      technologies: "Angular | Node js | SQL",
      link: null,
      category: "web",
    },
    {
      name: "Pixilla",
      description: "Pixilla is a demo e-commerce website for purchasing PC games and related accessories. It offers a sleek shopping experience with a wide selection of digital and physical gaming products.",
      image: pixilla,
      technologies: "HTML | CSS | Vanila JS",
      link: "https://manu5h.github.io/Pixilla/",
      category: "web",
    },
    {
      name: "Expence Tracker",
      description: "Expence Tracker is a comprehensive expense management website that helps users track daily, weekly, and long-term expenses. It features graphical charts and insights for better financial planning. ",
      image: exprenceTracker,
      technologies: "React Native",
      link: null,
      category: "mobile",
    },
    
  ];

  return (
    <div  className="projectSupremeDiv" >
      <div className="projectMainDiv">
        {projectsList.map((project, index) => (
          <div key={index} className="projectEachDiv">
            <div className="projectTitleDic">
              <h4
                style={{
                  color: "#ff014f",
                  margin: 0,
                  fontWeight: "600",
                }}
              >
                {project.name}
              </h4>
              {project.category === "web" ? (
                <DesktopOutlined className="projectSvg" style={{ color: "#c4cfde" }} />
              ) : (
                <MobileOutlined className="projectSvg" style={{ color: "#c4cfde" }} />
              )}
            </div>
            <img src={project.image} className="projectImg" alt={project.name} />
            <p style={{ color: "#c4cfde", textAlign: "justify" }} className="projectDescription">
              {project.description}
            </p>
            <p style={{ color: "#ff014f" }} className="technologiesTitle">Technologies</p>
            <p style={{ color: "#c4cfde" }} className="technologies">{project.technologies}</p>

            {project.link && (
              <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                {project.category === "web" ? (
                  <LinkOutlined style={{ fontSize: "16px", color: "#08c", marginRight: "8px" }} />
                ) : (
                  <CloudDownloadOutlined style={{ fontSize: "16px", color: "#08c", marginRight: "8px" }} />
                )}
                <a  className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "#08c", textDecoration: "none", fontWeight: "bold" }}>
                  {project.category === "web" ? "Visit Website" : "Download Apk"}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Displayprojects;
