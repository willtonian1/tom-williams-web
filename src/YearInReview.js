import React from "react";
import rugby from './2025Review.png'; 

const YearInReview = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "4rem 0" }}>
    <img
      src={rugby}
      alt="Tom Williams 2025"
      style={{
        width: "100%",
        maxWidth: 1100,
        borderRadius: 0,
        boxShadow: "0 8px 48px 0 rgba(0,0,0,0.35)",
        transition: "max-width 0.3s"
      }}
    />
  </div>
);

export default YearInReview;
