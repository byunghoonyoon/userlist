import React, { useState, useEffect } from "react";
import "../styles/Head.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Head = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="con-min-width"
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      <div className="con UserList">
        <div className="app-title">
          <a href="#" _blank="target">
            User List
          </a>
        </div>
        <div className="topbar_logo">
          <ul>
            <li>
              <a href="#" _blank="target">
                <span>HOME</span>
              </a>
              <a href="#" _blank="target">
                <span>MADE</span>
              </a>
              <a
                href="#"
                _blank="target"
                style={{
                  width: "60px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span>BY</span>
              </a>
              <a href="#" _blank="target">
                <span>BYUNG HOON</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
