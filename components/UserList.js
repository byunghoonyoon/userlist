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
  onNameSort,
}) => {
  return (
    <ul
      className="UserList"
      style={{
        margin: "0 auto",
        width: "1200px",
        overflow: "hidden",
      }}
      data-aos-offset="0"
      data-aos="flip-up"
      data-aos-duration="1000"
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
          onNameSort={onNameSort}

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
