import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>Sorry, we couldn't find this page</h2>
      <Link to="/main" style={{ textDecoration: "none" }}>
        <h4 style={{ color: "orange" }}>Go to Main Page</h4>
      </Link>
    </div>
  );
};

export default NotFound;
