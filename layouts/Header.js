import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [logined, setLogined] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="navbar bg-base-100 flex">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

      <div className="navbar-end relative flex">
        {logined ? (
          <div>
            <div className="user inline-block">
              <span
                style={{
                  marginRight: "20px",
                }}
              >
                {userId}님 안녕하세요
              </span>
              <FontAwesomeIcon
                className="user hover:bg-gray-800 hover:text-gray-50"
                icon={faUser}
                style={{
                  fontSize: "2rem",
                  marginLeft: "10px",
                  padding: "5px",
                  marginBottom: "-10px",
                }}
              />
            </div>
            <button>
              <div className="logout inline-block hover:bg-gray-800 hover:text-gray-50">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  style={{
                    fontSize: "2rem",
                    padding: "5px",
                    marginBottom: "-10px",
                  }}
                  onClick={() => {
                    if (window.confirm("정말 로그아웃 하시겠습니까?")) {
                      setLogined(false);
                      setUserId("");
                      setPassword("");
                    }
                  }}
                />
              </div>
            </button>
          </div>
        ) : (
          <div className="flex ">
            <div className="form-control idBox absolute">
              <label className="input-group input-group-vertical">
                <span data-aos="fade-up" data-aos-duration="1600">
                  ID
                </span>
                <input
                  type="text"
                  placeholder="아이디"
                  className="input input-bordered"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                />
              </label>
            </div>

            <div className="form-control pwBox absolute">
              <label className="input-group input-group-vertical">
                <span data-aos="fade-up" data-aos-duration="1600">
                  PassWord
                </span>
                <input
                  type="text"
                  placeholder="비밀번호"
                  className="input input-bordered"
                  value={password}
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
            </div>
            <div
              id="loginBtn"
              className="btn loginBtn absolute"
              data-aos="fade-up"
              data-aos-duration="2400"
              onClick={async () => {
                const data = await axios({
                  url: "http://localhost:3002/login",
                  method: "POST",
                  data: { user_id: userId, password },
                });
                setLogined(true);
              }}
            >
              Login
            </div>
          </div>
        )}
        {/* <div><FontAwesomeIcon icon={faSpellCheck} /></div> */}
      </div>
    </div>
  );
};

export default Header;
