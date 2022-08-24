import { MdRemoveCircleOutline, MdModeEditOutline } from "react-icons/md";
import "../styles/UserListItem.css";
const UserListItem = ({ user, onInsertToggle, setSelectedUser, onRemove }) => {
  const { id, name, regDate, phone, address, feature, color } = user;

  return (
    <li
      className="UserListItem"
      style={{ margin: "10px" }}
      draggable={true}
      data-AOS="fade-up"
      data-AOS-duration="1800"
      data-AOS-offset="0"

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
          overflow: "hidden",
        }}
        data-AOS="fade-up"
        data-AOS-duration="3000"
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
            marginRight: "30px",
            marginLeft: "20px",
            textAlign: "center",
            width: "70px",
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

            width: "120px",
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
              setSelectedUser((prev) => user);
              onInsertToggle();
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
