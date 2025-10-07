import React from "react";

const cardStyle = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 16px #0001",
  padding: "1.5rem 1.2rem 1.2rem 1.2rem",
  flex: 1,
  margin: "0 1rem",
  minWidth: 260,
  maxWidth: 340,
  minHeight: 320,
  height: 370,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
};


const containerStyle = {
  maxWidth: 1150,
  margin: "0 auto",
  padding: "0 2vw",
  width: "100%",
  boxSizing: "border-box",
};

const mobileContainerStyle = {
  maxWidth: "100%",
  margin: 0,
  padding: "0 8px",
  width: "100%",
  boxSizing: "border-box",
};

const flexStyle = {
  display: "flex",
  justifyContent: "center",
  gap: 24,
  flexWrap: "wrap",
};

const mobileFlexStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
};

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 700);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

const Projects = () => {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: "2rem 0 1rem 0" }}>
      <div style={isMobile ? mobileContainerStyle : containerStyle}>
        <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: "1.6rem", marginBottom: 0 }}>Projects</h2>
        <div style={{ textAlign: "center", color: "#888", marginBottom: "2rem" }}>A few of my favourites...</div>
        <div style={isMobile ? mobileFlexStyle : flexStyle}>
          {/* Card 1 */}
          <div style={cardStyle}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <a
                href={require("./Genetic_Algorithm_Routing.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block", margin: "30px auto 18px auto" }}
              >
                <button style={{ background: "#222", color: "#fff", border: 0, borderRadius: 8, padding: "0.3rem 1.2rem", fontWeight: 600, cursor: "pointer", minWidth: 120 }}>
                  Download
                </button>
              </a>
              <div style={{ flex: 1 }} />
              <div style={{ color: "#444", fontSize: 14, marginBottom: 16, textAlign: "center", lineHeight: 1.3, fontWeight: 400, maxWidth: 210 }}>
                Over the course of 6 months, I created a Python Tkinter desktop application focused on creating and optimising school bus routes with the goal of assisting staff who are tasked with making sure over 1000 students can reach school everyday.
              </div>
            </div>
            <div style={{ marginTop: "auto", width: "100%" }}>
              <div style={{ color: "#888", fontSize: 13, textAlign: "center" }}>Artificial Intelligence</div>
              <div style={{ fontWeight: 700, fontSize: 18, textAlign: "center" }}>Genetic Algorithm Routing</div>
            </div>
          </div>
          {/* Card 2 */}
          <div style={cardStyle}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
              <a
                href={require("./Redefining_Dominance_TW.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block", margin: "30px auto 18px auto" }}
              >
                <button style={{ background: "#222", color: "#fff", border: 0, borderRadius: 8, padding: "0.3rem 1.2rem", fontWeight: 600, cursor: "pointer", minWidth: 120 }}>
                  Download
                </button>
              </a>
              <div style={{ flex: 1 }} />
              <div style={{ color: "#444", fontSize: 14, marginBottom: 16, textAlign: "center", lineHeight: 1.3, fontWeight: 400, maxWidth: 210 }}>
This article highlights the achievements and gives an overview of the style and success of NBA superstar Nikola Jokic. The report includes statistical analysis, modelling, and machine learning techniques.</div>
            </div>
            <div style={{ marginTop: "auto", width: "100%" }}>
              <div style={{ color: "#888", fontSize: 13, textAlign: "center" }}>Data Science</div>
              <div style={{ fontWeight: 700, fontSize: 18, textAlign: "center" }}>Redefining Dominance</div>
            </div>
          </div>
          {/* Card 3 */}
          <div style={cardStyle}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <a
                href={require("./naturalPatternsFortran.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block", margin: "30px auto 18px auto" }}
              >
                <button style={{ background: "#222", color: "#fff", border: 0, borderRadius: 8, padding: "0.3rem 1.2rem", fontWeight: 600, cursor: "not-allowed", minWidth: 120 }}>
                  Read More
                </button>
              </a>
              <div style={{ flex: 1 }} />
              <div style={{ color: "#444", fontSize: 14, marginBottom: 16, textAlign: "center", lineHeight: 1.3, fontWeight: 400, maxWidth: 210, marginLeft: "auto", marginRight: "auto" }}>
                Simulated reaction-diffusion systems to create Turing Patterns using the FitzHugh-Nagumo model. 
              </div>
            </div>
            <div style={{ marginTop: "auto", width: "100%" }}>
              <div style={{ color: "#888", fontSize: 13, textAlign: "center" }}>Fortran</div>
              <div style={{ fontWeight: 700, fontSize: 18, textAlign: "center" }}>Turing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
