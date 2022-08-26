import React, { useState, useEffect } from "react";
import "../styles/UserAdd.css";
const UserAdd = ({ onInsert, onAddToggle }) => {
  const [nameValue, setNameValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [featureValue, setFeatureValue] = useState("");
  const onNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const onAddressChange = (e) => {
    setAddressValue(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };
  const onFeatureChange = (e) => {
    setFeatureValue(e.target.value);
  };
  const onSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    onInsert(nameValue, addressValue, phoneValue, featureValue);
    setNameValue("");
    setAddressValue("");
    setPhoneValue("");
    setFeatureValue("");
    onAddToggle();
  };

  return (
    <div className="Add absolute">
      <span className="AddHeader">
        생성하기
        <button className="closeBtn btn-circle" onClick={() => onAddToggle()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </span>
      <div className="line"></div>
      <div className="form-control absolute gap-2">
        <label className="input-group input-group-md">
          <input
            value={nameValue}
            onChange={onNameChange}
            type="text"
            placeholder="이름를 입력해주세요"
            className="input input-bordered input-md"
          />
        </label>
        <label className="input-group input-group-md">
          <input
            onChange={onAddressChange}
            value={addressValue}
            type="text"
            placeholder="주소를 입력해주세요"
            className="input input-bordered input-md"
          />
        </label>
        <label className="input-group input-group-md">
          <input
            onChange={onPhoneChange}
            value={phoneValue}
            type="text"
            placeholder="연락처를 입력해주세요"
            className="input input-bordered input-md"
          />
        </label>
        <label className="input-group input-group-md">
          <input
            onChange={onFeatureChange}
            value={featureValue}
            type="text"
            placeholder="취미를 입력해주세요"
            className="input input-bordered input-md"
          />
        </label>
        <button
          className="AddComplete btn btn-outline btn-info"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          생성 완료
        </button>
      </div>
    </div>
  );
};

export default UserAdd;
