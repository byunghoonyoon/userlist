import React from "react";
// npm install aos --save
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// useEffect(() => {
//   AOS.init();
// }) -> data aos 사용법

//npm i bootstrap-icons

const Footer = () => {
  return (
    <div>
      <button
        className="fixed hover:bg-gray-200 hover:border-white "
        style={{
          width: "60px",
          height: "60px",
          left: "2%",
          bottom: "2%",
          borderRadius: "50%",
          padding: "10px",
        }}
        onClick={() => {
          if (!window.scrollY) return;
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img src="https://cdn-icons-png.flaticon.com/128/56/56902.png"></img>
      </button>
    </div>
  );
};

export default Footer;
