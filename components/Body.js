import React, { useState, useEffect } from "react";
import "../styles/Body.css";
import { Table, Checkbox, Mask, Badge, Button } from "react-daisyui";
import { MdOutlineInsertChart, MdOutlineSearch } from "react-icons/md";
import UserList from "./UserList";
import Body2 from "./Body2";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown19 } from "@fortawesome/free-solid-svg-icons";
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faPersonSnowboarding } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

// $ npm i @fortawesome/fontawesome-svg-core
// $ npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
// $ npm i @fortawesome/react-fontawesome 폰트어썸사용법
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons"; ->카멜표기법
{
  /* <FontAwesomeIcon icon={faTrashCan} /> 본문호출법*/
}

const Body = ({
  user,
  users,
  onInsert,
  onRemove,
  onUpdate,
  onInsertToggle,
  setSelectedUser,
  onAddToggle,
  onSearch,
  onNameSort,
  onRegdateSort,
}) => {
  useEffect(() => {
    AOS.init();
  });
  const [value, setValue] = useState("");
  const onSearchChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="body">
      <div className="background">
        <div className="circle-box animation animation-1 h-full">
          <FontAwesomeIcon
            icon={faGhost}
            style={{
              position: "absolute",
              fontSize: "10rem",
              zIndex: "9999",
              color: "blanchedalmond",
            }}
          />
        </div>
        <div className="circle-box animation animation-2 h-full">
          <FontAwesomeIcon
            icon={faGhost}
            style={{
              position: "absolute",
              fontSize: "10rem",
              zIndex: "9999",
              color: "#5b5b5b",
            }}
          />
        </div>
        <div className="circle-box animation animation-3 h-full">
          <FontAwesomeIcon
            icon={faGhost}
            style={{
              position: "absolute",
              fontSize: "10rem",
              zIndex: "9999",
              color: "##f3f6f4",
            }}
          />
        </div>
      </div>
      <div
        className="overflow-x-auto mx-auto my-4 block"
        // data-AOS="fade-up"
        // data-AOS-duration="800"
        style={{
          width: "1200px",
          position: "relative",
          backgroundColor: "#FBAB7E",
          backgroundImage: "linear-gradient(62deg, #F9DCBC 0%, #F7CE68 100%)",
        }}
      >
        {" "}
        <button
          className="btn btn-info absolute"
          style={{
            left: "10px",
            top: "10px",
          }}
          onClick={() => {
            onAddToggle();
          }}
          data-aos="fade-up"
          data-aos-duration="2400"
        >
          회원 추가
        </button>
        <input
          type="text"
          placeholder="검색할 이름을 입력해주세요"
          className="input input-bordered input-info w-full max-w-xs absolute"
          style={{
            right: "70px",
            top: "10px",
          }}
          value={value}
          onChange={onSearchChange}
          data-aos="fade-up"
          data-aos-duration="1600"
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              onSearch(value);
            }
          }}
        />
        <button onClick={() => onSearch(value)}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/149/149852.png"
            alt=""
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              right: "1%",
              top: "1.5%",
            }}
          />
        </button>
        {/* <Checkbox onClick={() => {}} /> */}
        <div
          className="listbox"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "70px",
            alignItems: "center",
            backgroundColor: "#8EC5FC",
            backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
            color: "white",
          }}
          data-aos="fade-up"
          data-aos-duration="2400"
        >
          <button
            onClick={() => {
              onNameSort();
            }}
            style={{ height: "65px" }}
          >
            <span
              style={{
                width: "120px",
                textAlign: "center",
              }}
            >
              이름
              <FontAwesomeIcon
                icon={faArrowUpAZ}
                style={{
                  marginLeft: "-40px",
                  fontSize: "1.5rem",
                }}
              />
            </span>
          </button>
          <span
            style={{
              marginLeft: "-40px",
              height: "65px",
              width: "100px",
            }}
          >
            주소
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              style={{
                marginLeft: "-30px",
                fontSize: "1.3rem",
              }}
            />
          </span>
          <span
            style={{
              marginLeft: "10px",
              fontSize: "1.3rem",
              height: "65px",
              width: "100px",
            }}
          >
            연락처
            <FontAwesomeIcon
              icon={faSquarePhone}
              style={{
                marginLeft: "-20px",
                fontSize: "1.3rem",
              }}
            />
          </span>
          <button
            onClick={() => {
              onRegdateSort();
            }}
          >
            <span
              style={{
                marginRight: "0px",
                marginLeft: "0px",
                height: "65px",
                width: "100px",
              }}
            >
              가입날짜
              <FontAwesomeIcon
                icon={faArrowDown19}
                style={{
                  fontSize: "1.7rem",
                }}
              />
            </span>
          </button>
          <span
            style={{
              height: "65px",
              width: "100px",
              marginLeft: "-20px",
              fontSize: "1.3rem",
            }}
          >
            취미
            <FontAwesomeIcon
              icon={faPersonSnowboarding}
              style={{
                marginLeft: "-20px",
                fontSize: "2rem",
              }}
            />
          </span>
          <span>&nbsp;</span>
          <span
            style={{
              marginLeft: "-90px",
              height: "65px",
              width: "100px",
            }}
          >
            수정
            <FontAwesomeIcon
              icon={faUserPen}
              style={{
                marginLeft: "-20px",
                fontSize: "1.3rem",
              }}
            />
          </span>
          <span
            style={{
              marginLeft: "-50px",
              height: "65px",
              width: "100px",
            }}
          >
            삭제
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{
                marginLeft: "-20px",
                fontSize: "1.3rem",
              }}
            />
          </span>
          <span>&nbsp;</span>
          <span
            style={{
              height: "65px",
              width: "100px",
            }}
          >
            Read More
          </span>
          <span />
        </div>
        <UserList
          user={user}
          users={users}
          onRemove={onRemove}
          onInsertToggle={onInsertToggle}
          setSelectedUser={setSelectedUser}
          onUpdate={onUpdate}
          onInsert={onInsert}
          onAddToggle={onAddToggle}
          onNameSort={onNameSort}
        />
      </div>
      <Body2 />
    </div>
  );
};

export default Body;
