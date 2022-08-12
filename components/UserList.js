import { useState } from "react";
import UserListItem from "./UserListItem";

const TodoList = ({ users }) => {
  return (
    <ul className="UserList">
      {/* {users.map((user, index) => ( */}
      <UserListItem
      //   user={user}
      //   key={index}
      //   onRemove={onRemove}
      //   onToggle={onToggle}
      //   onInsertToggle={onInsertToggle}
      //   setSelectedTodo={setSelectedTodo}
      //   handleDragStart={handleDragStart}
      //   handleDragOver={handleDragOver}
      //   handleDrop={handleDrop}
      />
      {/* ))} */}
    </ul>
  );
};

export default TodoList;
