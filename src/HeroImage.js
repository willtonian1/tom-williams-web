import React from "react";
import rugby from './rugby.jpg'; // Tell webpack this JS file uses this image

const HeroImage = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
    <img
      src={rugby}
      alt="Tom Williams Rugby"
      style={{
        width: "100%",
        maxWidth: 1100,
        height: 500,
        objectFit: "cover",
        borderRadius: 0,
        filter: "grayscale(100%)",
        boxShadow: "0 8px 48px 0 rgba(0,0,0,0.35)",
        transition: "max-width 0.3s"
      }}
    />
  </div>
);

export default HeroImage;
