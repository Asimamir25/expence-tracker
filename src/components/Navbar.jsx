import React from "react";

const Navbar = () => {
  return (
    <div
      className="container-fluid bg-primary "
      style={{ padding: 0, margin: 0 }}
    >
      <div className="container d-flex text-white fs-25 p-3 fw-600 justify-content-between ">
        <h1 className="nav-link">Expenece Tracker</h1>
        <h1 className="nav-link ">View Expenece</h1>
      </div>
    </div>
  );
};

export default Navbar;
