import React from "react";
import { Table, Checkbox, Mask, Badge, Button } from "react-daisyui";
import UserList from "./UserList";

const Body = ({
  user,
  users,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedTodo,
}) => {
  return (
    <div
      className="overflow-x-auto mx-auto my-4 block"
      style={{
        width: "1200px",
        height: "70vh",
        backgroundColor: "#FCF6F5",
      }}
    >
      {/* <Checkbox onClick={() => {}} /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          marginTop: "50px",
          alignItems: "center",
          backgroundColor: "#7b9acc",
          color: "white",
          // border: "5px red solid", rgba() 수정
        }}
      >
        <span
          style={{
            marginRight: "0px",
            marginLeft: "15px",
          }}
        >
          Name
        </span>
        <span
          style={{
            marginRight: "10px",
          }}
        >
          Address
        </span>
        <span
          style={{
            marginRight: "0px",
          }}
        >
          Phone
        </span>
        <span
          style={{
            marginRight: "0px",
            marginLeft: "10px",
          }}
        >
          가입날짜
        </span>
        <span
          style={{
            marginLeft: "10px",
          }}
        >
          취미
        </span>
        <span>&nbsp;</span>
        <span
          style={{
            marginLeft: "-50px",
          }}
        >
          Edit
        </span>
        <span>Delete</span>
        <span>&nbsp;</span>
        <span>Read More</span>
        <span />
      </div>
      <button
        onClick={() => {}}
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          top: "8%",
          marginLeft: "5px",
          backgroundColor: "#195190",
          color: "rgb(236, 247, 239)",
        }}
      >
        {" "}
        회원 추가
      </button>
      <UserList
        user={user}
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedTodo={setSelectedTodo}
      />
    </div>
  );
};

export default Body;
