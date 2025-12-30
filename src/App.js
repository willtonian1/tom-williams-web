import "./App.css";
import Header from "./Header";
import HeroImage from "./HeroImage";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import FooterLinks from "./FooterLinks";
import YearInReview from "./YearInReview";

function App() {
  return (
    <div style={{ background: "#e3e3e8", minHeight: "100vh", width: "100%" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", background: "#fff", minHeight: "100vh", boxShadow: "0 0 32px #0001" }}>
        <Header />
        <HeroImage />
        <Projects />
        <Testimonial />
        <YearInReview />
        <FooterLinks />
      </div>
    </div>
  );
}

export default App;
