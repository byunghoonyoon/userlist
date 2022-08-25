import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Body2 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
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
      {/* <div class="sliderBox">
        <div className="mainSkill bg-indigo-600 pb-16 relative overflow-hidden">
          <div className="flex flex-row mb-10 absolute animate-slider">
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FD4D12AQHa-uvFqNbRDA%2Farticle-cover_image-shrink_600_2000%2F0%2F1659628219023%3Fe%3D1665014400%26v%3Dbeta%26t%3D_tE-EE7ZGWRWYd17DcqkAlIzHMfVsXO0MTrNky7T28c&type=a340"
              alt="react logo"
            />
            <img
              className="w-100 h-full mx-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fweb-development-5-1%2F64%2Fhtml_code_web_development-512.png&type=a340"
              alt="html logo"
            />
            <img
              className="w-110 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fwww.iconsplace.com%2Ficons%2Fpreview%2Faqua%2Fcss-256.png&type=a340"
              alt="css logo"
            />
            <img
              className="w-100 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F480%2Fjavascript--v2.png&type=a340"
              alt="javascript logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcamo.githubusercontent.com%2F2be6c13639334e6be86614b7914afe1c34e76d49f361d515bac94bd7e21e2b49%2F68747470733a2f2f696d616765732e766578656c732e636f6d2f6d656469612f75736572732f332f3136363430312f69736f6c617465642f707265766965772f62383261613761633366373336646437383537306464336661336661396532342d6a6176612d70726f6772616d6d696e672d6c616e67756167652d69636f6e2d62792d766578656c732e706e67&type=a340"
              alt="vue logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjFfMTY3%2FMDAxNjM0NzkyNTIwMTA3.k1jqnXRQLu6FFTBFz4hZFeMHZ8J0czBEDY4M6HebfcQg.3IoINZ5ZtFDFaekhSY_spT1sJZ7IMcrJMh7ML_HKtn8g.JPEG.mcoding777%2F%25B3%25EB%25B5%25E5js7.jpg&type=a340"
              alt="nuxt logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fuser-images.githubusercontent.com%2F42545742%2F117004851-231fb400-ad19-11eb-9f52-41cbd970dd2c.png&type=l340_165"
              alt="scss logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1199%2F1199128.png&type=a340"
              alt="styled logo"
            />
            <img
              className="w-130 h-full mr-10"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MTNfMjgg%2FMDAxNDk3MzI5ODY5NDEz.1PdsaPMFENAbXrWe4kUJnMajujRSZL_s08XF1u7nv24g.zPfulQUDADwD2_lP88uisHkiG3RGvu9gGs4UwxCkBXog.JPEG.gkwotls321%2FKakaoTalk_20170522_185448027.jpg&type=a340"
              alt="tailwind logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FD4D12AQHa-uvFqNbRDA%2Farticle-cover_image-shrink_600_2000%2F0%2F1659628219023%3Fe%3D1665014400%26v%3Dbeta%26t%3D_tE-EE7ZGWRWYd17DcqkAlIzHMfVsXO0MTrNky7T28c&type=a340"
              alt="react logo"
            />
            <img
              className="w-100 h-full mx-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fweb-development-5-1%2F64%2Fhtml_code_web_development-512.png&type=a340"
              alt="html logo"
            />
            <img
              className="w-110 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fwww.iconsplace.com%2Ficons%2Fpreview%2Faqua%2Fcss-256.png&type=a340"
              alt="css logo"
            />
            <img
              className="w-100 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F480%2Fjavascript--v2.png&type=a340"
              alt="javascript logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcamo.githubusercontent.com%2F2be6c13639334e6be86614b7914afe1c34e76d49f361d515bac94bd7e21e2b49%2F68747470733a2f2f696d616765732e766578656c732e636f6d2f6d656469612f75736572732f332f3136363430312f69736f6c617465642f707265766965772f62383261613761633366373336646437383537306464336661336661396532342d6a6176612d70726f6772616d6d696e672d6c616e67756167652d69636f6e2d62792d766578656c732e706e67&type=a340"
              alt="vue logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjFfMTY3%2FMDAxNjM0NzkyNTIwMTA3.k1jqnXRQLu6FFTBFz4hZFeMHZ8J0czBEDY4M6HebfcQg.3IoINZ5ZtFDFaekhSY_spT1sJZ7IMcrJMh7ML_HKtn8g.JPEG.mcoding777%2F%25B3%25EB%25B5%25E5js7.jpg&type=a340"
              alt="nuxt logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fuser-images.githubusercontent.com%2F42545742%2F117004851-231fb400-ad19-11eb-9f52-41cbd970dd2c.png&type=l340_165"
              alt="scss logo"
            />
            <img
              className="w-120 h-full mr-10"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1199%2F1199128.png&type=a340"
              alt="styled logo"
            />
            <img
              className="w-130 h-full mr-10"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MTNfMjgg%2FMDAxNDk3MzI5ODY5NDEz.1PdsaPMFENAbXrWe4kUJnMajujRSZL_s08XF1u7nv24g.zPfulQUDADwD2_lP88uisHkiG3RGvu9gGs4UwxCkBXog.JPEG.gkwotls321%2FKakaoTalk_20170522_185448027.jpg&type=a340"
              alt="tailwind logo"
            />
          </div>
        </div>
        </div> */}
    </div>
  );
};

export default Body2;
