import React from "react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ArduinoImages } from "./ArduinoDartsImages.pdf"
const FooterLinks = () => (
  <section style={{
    width: "100%",
    background: "#f6f6f6",
    padding: "2.5rem 0 2.5rem 0",
    marginTop: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    borderTop: "1px solid #e0e0e0"
  }}>
    <a href="https://github.com/willtonian1" target="_blank" rel="noopener noreferrer" style={{ color: "#222", fontWeight: 600, fontSize: 18, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
      <GithubIcon size={28} /> GitHub
    </a>
    
    <a href="https://www.linkedin.com/in/tom-williams-990536271/" target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5", fontWeight: 600, fontSize: 18, textDecoration: "none", display: "flex", alignItems: "center", gap: 8}}>
      <LinkedinIcon size={28} /> LinkedIn
    </a>

    <a
                href={require("./ArduinoDartsImages.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block", margin: "30px auto 18px auto" }}
              >
                ArduinoDartsImages
              </a>

  </section>
);

export default FooterLinks;
