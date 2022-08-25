import React from "react";
import Header from "../layouts/Header";
import { useRecoilValue } from "recoil";
import { authenticatedState } from "../recoil/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const logined = useRecoilValue(authenticatedState);
  return (
    <div>
      <Header />
      <div></div>
    </div>
  );
};

export default Home;
