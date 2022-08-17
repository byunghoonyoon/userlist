import React from "react";
import "./Head.css";

const Head = () => {
  return (
    <div className="con-min-width">
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
                <span></span>
                <span>HOME</span>
              </a>
              <a href="#" _blank="target">
                <span></span>
                <span>MADE</span>
              </a>
              <a href="#" _blank="target">
                <span></span>
                <span>BY</span>
              </a>
              <a href="#" _blank="target">
                <span></span>
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
