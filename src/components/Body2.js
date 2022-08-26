import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Body2.css";
import { FaHeartbeat } from "react-icons/fa";
const Body2 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "50px",
        }}
      >
        <a
          href="https://tv.kakao.com/channel/4014887/video"
          target="_blank"
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{
              width: "300px",
            }}
          />
          kakao tv 공부로그 동영상 저장
        </a>
        <a
          href="https://wiken.io/b/8216"
          style={{
            backgroundColor: "purple",
            width: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "1.2rem",
            letterSpacing: "2px",
            position: "relative",
          }}
          target="_blank"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {" "}
          WIKEN{" "}
          <span
            style={{
              position: "absolute",
              bottom: "-10%",
              color: "black",
              fontWeight: "bolder",
            }}
          >
            WIKEN 공부 블로그
          </span>
        </a>
      </div>
      {/* <div className="slidebox" stlye={{ border: "10px red solid" }}>
        <input type="radio" name="slide" id="slide01" checked />
        <input type="radio" name="slide" id="slide02" />
        <input type="radio" name="slide" id="slide03" />
        <input type="radio" name="slide" id="slide04" />
        <ul className="slidelist">
          <li class="sliteitem">
            <div>
              <label htmlFor="slide04" className="left"></label>
              <label htmlFor="slide02" className="right"></label>
              <a href="">
                <img
                  src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </a>
            </div>
          </li>
          <li class="sliteitem">
            <div>
              <label htmlFor="slide01" className="left"></label>
              <label htmlFor="slide03" className="right"></label>
              <a href="">
                <img
                  src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt=""
                />
              </a>
            </div>
          </li>
          <li class="sliteitem">
            <div>
              <label htmlFor="slide02" className="left"></label>
              <label htmlFor="slide04" className="right"></label>
              <a href="">
                <img
                  src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt=""
                />
              </a>
            </div>
          </li>
          <li class="sliteitem">
            <div>
              <label htmlFor="slide03" className="left"></label>
              <label htmlFor="slide01" className="right"></label>
              <a href="">
                <img
                  src="https://images.pexels.com/photos/870711/pexels-photo-870711.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt=""
                />
              </a>
            </div>
          </li>
        </ul>
      </div> https://blog.naver.com/co-nam/222198229342 */}
      {/* <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=300"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=300"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://images.pexels.com/photos/870711/pexels-photo-870711.jpeg?auto=compress&cs=tinysrgb&w=300"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div> */}

      <div className="flex justify-center" style={{ marginTop: "100px" }}>
        <div className="heart animation">
          <FaHeartbeat style={{ fontSize: "5rem", color: "#EA3D3D" }} />
        </div>
      </div>
      <div className="flex justify-center" style={{ marginTop: "70px" }}>
        <span>오늘은 무엇을 배울까요?</span>
      </div>
    </div>
  );
};

export default Body2;
// npm install react-icons --save
