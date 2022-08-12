const UserListItem = ({}) => {
  //   const {} = user;
  //   id, name, regDate, phone, address, feature
  return (
    <li
    // className="UserListItem"
    // draggable={true}
    // onDragStart={(e) => {
    //   handleDragStart(e, todo);
    // }}
    // onDragOver={handleDragOver}
    // onDrop={(e) => {
    //   handleDrop(e, todo);
    // }}
    >
      <div
        // className={cn("checkbox", { checked: checked })}
        onClick={() => {
          // onToggle(id);
        }}
      >
        {/* {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} */}
        <div className="text"></div>
      </div>
      <div
        className="edit"
        onClick={() => {
          // onInsertToggle();
          // setSelectedTodo((prev) => todo);
        }}
      >
        {/* <MdModeEditOutline /> */}
      </div>
      <div
        className="remove"
        onClick={() => {
          //     onRemove(id);
        }}
      >
        {/* <MdRemoveCircleOutline /> */}
      </div>
    </li>
  );
};

export default UserListItem;
