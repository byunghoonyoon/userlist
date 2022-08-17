import React, { useState, useEffect } from "react";
import "./UserEdit.css";

const UserEdit = ({
  user,
  users,
  onRemove,
  onUpdate,
  // onToggle={onToggle}
  onInsertToggle,
  selectedUser,
}) => {
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
  const onSubmit = () => {
    // e.preventDefault();
    onUpdate(
      selectedUser.id,
      nameValue,
      addressValue,
      phoneValue,
      featureValue
    );
    setNameValue("");
    setAddressValue("");
    setPhoneValue("");
    setFeatureValue("");
  };

  useEffect(() => {
    console.log(selectedUser);
    // https://velog.io/@kwonh/React-%EA%B9%94%EB%81%94%ED%95%9C-%EC%A1%B0%EA%B1%B4%EB%B6%80%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0
    // 조건부렌더링 , user 찾는것
    // setNameValue(selectedUser.name);
    // setAddressValue(selectedUser.address);
    // setPhoneValue(selectedUser.phone);
    // setFeatureValue(selectedUser.feature);
  }, [selectedUser]);

  return (
    <div className="Edit absolute">
      <span className="EditHeader">
        수정하기
        <button
          className="closeBtn btn-circle"
          onClick={() => onInsertToggle()}
        >
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
          className="editComplete btn btn-outline btn-info"
          type="submit"
          onClick={() => {
            onSubmit();
            onInsertToggle();
          }}
        >
          수정 완료
        </button>
      </div>
    </div>
  );
};

export default UserEdit;
