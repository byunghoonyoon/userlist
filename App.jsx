import Body from "./components/Body";
import Head from "./components/Head";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserEdit from "./components/UserEdit";
import UserAdd from "./components/UserAdd";
import { throttle } from "throttle-debounce";
// import Draggable from "react-draggable";

const App = () => {
  const [user, setUser] = useState("");
  const [insertToggle, setInsertToggle] = useState(false);
  const [addToggle, setAddToggle] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [btnToggle, setBtnToggle] = useState(false);

  // const handleDragStart = (e, user) => {
  //   e.dataTransfer.effectAllowed = "move";
  //   e.dataTransfer.setData("tmp", JSON.stringify(user));
  // };
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };
  // const handleDrop = async (e, targetItem) => {
  //   e.preventDefault();
  //   try {
  //     const originalItem = await JSON.parse(e.dataTransfer.getData("tmp")); // 1
  //     setUsers((users) =>
  //       users.map((user) => {
  //         return user.id === targetItem.id
  //           ? { ...originalItem, id: targetItem.id }
  //           : user.id === originalItem.id
  //           ? { ...targetItem, id: originalItem.id }
  //           : user;
  //       })
  //     );
  //     const data = await axios({
  //       url: `http://localhost:3001/users/swap/${originalItem.id}`,
  //       method: "PATCH",
  //       data: { targetId: targetItem.id },
  //     });
  //     setUsers(data.data);
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:3002/users",
          method: "GET",
        });

        setUsers(data.data);
        setIsLoading(false);
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 3000);
        });
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  if (error) {
    return <>에러: {error.message}</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }

  const onInsert = async (
    nameValue,
    addressValue,
    phoneValue,
    featureValue
  ) => {
    try {
      const data = await axios.post(`http://localhost:3002/users/add`, {
        name: nameValue,
        address: addressValue,
        phone: phoneValue,
        feature: featureValue,
      });
      setUsers(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onRemove = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const removeData = async () => {
        try {
          const data = await axios({
            url: `http://localhost:3002/users/delete/${id}`,
            method: "DELETE",
          });
          setIsLoading(false);
          setUsers((users) => users.filter((user) => user.id !== id));
        } catch (e) {
          setError(e);
        }
      };
      removeData();
      if (error) {
        return <>에러: {error.message}</>;
      }
      if (isLoading) {
        return <>Loading...</>;
      }
    }
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };
  const onAddToggle = () => {
    setAddToggle((prev) => !prev);
  };

  const onUpdate = async (
    id,
    nameValue,
    addressValue,
    phoneValue,
    featureValue
  ) => {
    try {
      const data = await axios.patch(
        `http://localhost:3002/users/update/${id}`,
        {
          name: nameValue,
          address: addressValue,
          phone: phoneValue,
          feature: featureValue,
        }
      );
      setUsers(data.data);
    } catch (e) {
      setError(e);
    }
    onInsertToggle();
    if (error) {
      return <>에러: {error.message}</>;
    }
    if (isLoading) {
      return <>Loading...</>;
    }
  };
  const onbtnToggle = () => {
    setBtnToggle((prev) => !prev);
  };

  // 검색 쿼리 orderby or where name 등으로 해보고 정렬하기.
  // const names = users.map((user) => user.name);
  // const searchName = (element) => {
  //   if (element == value) {
  //     return element;
  //   }
  // };
  // console.log(users[names.findIndex(searchName)].name);

  const onSearch = async (name) => {
    if (name === null || name == "") {
      const getData = async () => {
        try {
          const data = await axios({
            url: "http://localhost:3002/users",
            method: "GET",
          });

          setUsers(data.data);
          setIsLoading(false);
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 3000);
          });
        } catch (e) {
          setError(e);
        }
      };
      getData();
      if (error) {
        return <>에러: {error.message}</>;
      }
      if (isLoading) {
        return <>Loading...</>;
      }
    } else {
      try {
        const data = await axios({
          // url: `http://localhost:3002/usersSearch/${name}`,
          // method: "GET",
          url: "http://localhost:3002/users",
          method: "GET",
        });
        const filterData = users.filter((row) => row.name.includes(name));
        if (filterData) {
          let merged = filterData.concat(users);

          setUsers(merged.filter((item, pos) => merged.indexOf(item) === pos));
        }

        setIsLoading(false);
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 3000);
        });
      } catch (e) {
        setError(e);
      }
    }
  };
  // ${name}에 데이터가 있으므로 req.params; 로 받아야함.
  // 검색이틀렸을경우 에러가 나지않고 잘 뜨게끔수정해야함.

  if (error) {
    return <>에러: {error.message}</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Head />
      <Body
        user={user}
        users={users}
        onInsert={onInsert}
        onRemove={onRemove}
        onInsertToggle={onInsertToggle}
        onAddToggle={onAddToggle}
        setSelectedUser={setSelectedUser}
        onUpdate={onUpdate}
        onSearch={onSearch}
      />
      {insertToggle && (
        <UserEdit
          user={user}
          users={users}
          onRemove={onRemove}
          onInsertToggle={onInsertToggle}
          selectedUser={selectedUser}
          onUpdate={onUpdate}
        />
      )}
      {addToggle && (
        <UserAdd
          user={user}
          users={users}
          onInsert={onInsert}
          onAddToggle={onAddToggle}
          selectedUser={selectedUser}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
