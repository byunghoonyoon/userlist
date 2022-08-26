import React from "react";
import "../styles/Footer.css";
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
    <div className="Bottom">
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
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <span>SBS 아카데미 대전 지점</span>
        <div
          className="flex justify-center img-box"
          style={{ marginTop: "10px" }}
        >
          <img src="https://daejeon.sbsart.com/2022/img/sub//dj_map.jpg" />
        </div>
      </div>
      <div className="Bottom-1">
        <div className="">
          <ul className="flex flex-row gap-6">
            <a href="#">
              <li>개인정보 처리방침</li>
            </a>
            <a href="#">
              <li>학원소개</li>
            </a>
            <a href="#">
              <li>산학협력 현황</li>
            </a>
            <a href="#">
              <li>고객상담센터</li>
            </a>
            <a href="#">
              <li>학원위치안내</li>
            </a>
            <a href="#">
              <li>대표문의전화 042-719-8383</li>
            </a>
          </ul>
          <ul className="sbsFooter2" style={{ marginTop: "25px" }}>
            <li>
              에스비에스(SBS)아카데미컴퓨터아트학원
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사업자번호:822-81-00224
            </li>
            <li>
              통신판매업번호:(주)에스씨에이아카데미대전 2015-대전서구-0647호
            </li>
            <li>대표:이지운&nbsp;&nbsp;&nbsp; 개인정보책임자:김봉섭</li>
            <li>주소:대전광역시 서구 대덕대로 179 굿모닝어학원빌딩 9층</li>
            <li>교육담당:대전지점 학원등록번호:제4019호</li>
            <li>
              대표전화:042-719-8383 &nbsp;&nbsp;&nbsp;대표이메일:
              <span>privacy@koreaedugroup.com</span>
            </li>
            <a href="#">
              <li>수강료안내</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
