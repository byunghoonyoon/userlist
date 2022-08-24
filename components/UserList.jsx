import { useState } from "react";
import UserListItem from "./UserListItem";
import "../styles/UserList.css";
const UserList = ({
  users,
  onRemove,
  onInsertToggle,
  setSelectedUser,
  onUpdate,
  onInsert,
  onAddToggle,
}) => {
  return (
    <ul
      className="UserList"
      style={{
        margin: "0 auto",
        width: "1200px",
        overflow: "hidden",
      }}
      data-AOS-offset="0"
      data-AOS="fade-up"
      data-AOS-duration="3000"
    >
      {/* {Array.from(users).map((user, index) => ( */}
      {users.map((user, index) => (
        <UserListItem
          user={user}
          key={index}
          onRemove={onRemove}
          onInsertToggle={onInsertToggle}
          setSelectedUser={setSelectedUser}
          onAddToggle={onAddToggle}

          //   handleDragStart={handleDragStart}
          //   handleDragOver={handleDragOver}
          //   handleDrop={handleDrop}
        />
        // { ))} }
      ))}
    </ul>
  );
};

export default UserList;
