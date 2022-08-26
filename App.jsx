import Body from "./components/Body";
import Head from "./components/Head";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserEdit from "./components/UserEdit";
import UserAdd from "./components/UserAdd";
import Fullpage from "./components/Fullpage";
import Home from "./routes/Home";
import About from "./routes/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullPage from "./components/Fullpage";
import $ from "jquery";
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
  const [nameToggle, setNameToggle] = useState(false);
  const [regDateToggle, setRegDateToggle] = useState(false);

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

  if (error) {
    return <>에러: {error.message}</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }

  const onNameSort = async () => {
    if (nameToggle) {
      const getData = async () => {
        try {
          const data = await axios({
            url: "http://localhost:3002/usersName",
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
      setNameToggle(!nameToggle);
      if (error) {
        return <>에러: {error.message}</>;
      }
      if (isLoading) {
        return <>Loading...</>;
      }
    } else {
      const getData = async () => {
        try {
          const data = await axios({
            url: "http://localhost:3002/usersNameReverse",
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
      setNameToggle(!nameToggle);
      if (error) {
        return <>에러: {error.message}</>;
      }
      if (isLoading) {
        return <>Loading...</>;
      }
    }
  };

  const onRegdateSort = async () => {
    if (regDateToggle) {
      const getData = async () => {
        try {
          const data = await axios({
            url: "http://localhost:3002/usersRegdate",
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
      setRegDateToggle(!regDateToggle);
      if (error) {
        return <>에러: {error.message}</>;
      }
      if (isLoading) {
        return <>Loading...</>;
      }
    } else {
      const getData = async () => {
        try {
          const data = await axios({
            url: "http://localhost:3002/usersRegdateReverse",
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
      setRegDateToggle(!regDateToggle);
      if (error) {
        return <>에러: {error.message}</>;
      }
      if (isLoading) {
        return <>Loading...</>;
      }
    }
  };
  return (
    <div>
      <Head />
      <Router>
        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
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
        onNameSort={onNameSort}
        onRegdateSort={onRegdateSort}
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
      {/* <FullPage /> */}
    </div>
  );
};
// npm install react-app-rewired --save-dev
// npm install fullpage.js
// npm i jquery
// npm i jquery --save
// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
// "eject": "react-scripts eject"
export default App;
