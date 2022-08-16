import cn from "classnames";
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from "react-icons/md";

const UserListItem = ({
  user,
  checked,
  onToggle,
  onInsertToggle,
  setSelectedUser,
  onRemove,
}) => {
  const { id, name, regDate, phone, address, feature } = user;

  return (
    <li
      className="UserListItem"
      style={{ margin: "10px" }}
      draggable={true}
      // onDragStart={(e) => {
      //   handleDragStart(e, user);
      // }}
      // onDragOver={handleDragOver}
      // onDrop={(e) => {
      //   handleDrop(e, user);
      // }}
    >
      <div
        className="Users"
        style={{
          display: "flex",
          width: "100%",
          border: "2px #7b9acc solid",
          height: "50px",
          alignItems: "center",
        }}
      >
        {/* <div
          className={cn("checkbox", { checked: checked })}
          onClick={() => {
            onToggle(id);
          }}
          style={{
            display: "inline-block",
            marginLeft: "-20px",
          }}
        >
          {/* {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} */}
        {/* </div> */}
        <div
          className="name"
          style={{
            marginRight: "50px",
            marginLeft: "20px",
            textAlign: "center",
          }}
        >
          {name}
        </div>
        <div
          className="address"
          style={{
            marginRight: "50px",
            textAlign: "center",
            width: "100px",
          }}
        >
          {address}
        </div>
        <div
          className="phone"
          style={{
            marginRight: "40px",
            textAlign: "center",
          }}
        >
          {phone}
        </div>
        <div
          className="regDate"
          style={{
            marginRight: "40px",
            textAlign: "center",
            width: "84px",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {regDate}
        </div>
        <div
          className="feature"
          style={{
            marginRight: "80px",
            textAlign: "center",

            width: "100px",
          }}
        >
          {feature}
        </div>
        <button>
          <div
            className="edit"
            onClick={() => {
              onInsertToggle();
              setSelectedUser((prev) => user);
            }}
            style={{
              marginRight: "100px",
            }}
          >
            <MdModeEditOutline />
          </div>
        </button>
        <button>
          <div
            className="remove"
            onClick={() => {
              onRemove(id);
            }}
          >
            <MdRemoveCircleOutline />
          </div>
        </button>
      </div>
    </li>
  );
};

export default UserListItem;
