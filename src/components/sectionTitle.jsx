import "../styles/resume.css";

const SectionTitle = ({title}) => {
  return (
    <div
      className="resumeTitle"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3
        className="resumeheading"
        style={{
          color: "#ff014f",
          fontFamily: "sans-serif",
          marginRight: "5px",
        }}
      >
        {"<"}
      </h3>
      <h3 className="resumeheading" style={{ margin: "0 5px" }}>
        {title}
      </h3>
      <h3
        className="resumeheading"
        style={{
          color: "#ff014f",
          fontFamily: "sans-serif",
          marginLeft: "5px",
        }}
      >
        {"/>"}
      </h3>
    </div>
  );
};

export default SectionTitle;
