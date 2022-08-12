import Body from "./components/Body";
import Head from "./components/Head";
import Footer from "./components/Footer";
import React, { useRef, useState, useEffect } from "react";
import { Table, Checkbox, Mask, Badge, Button } from "react-daisyui";
// import UserInsert from "./components/TodoInsert";
// import UserTemplate from "./components/TodoTemplate";
// import UserList from "./components/TodoList";
// import UserEdit from "./components/TodoEdit";
// import Draggable from "react-draggable";
import axios from "axios";

const App = () => {
  // const [user, setUser] = useState("");
  // const [insertToggle, setInsertToggle] = useState(false);
  // const [selectedTodo, setSelectedTodo] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [users, setUsers] = useState([]);

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

  // useEffect(() => {
  //   try {
  //     const getData = async () => {
  //       const data = await axios({
  //         url: "http://localhost:3001/users",
  //         method: "GET",
  //       });
  //       setUsers(data.data);
  //       setIsLoading(false);
  //       await new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           resolve();
  //         }, 3000);
  //       });
  //     };
  //     getData();
  //   } catch (e) {
  //     setError(e);
  //   }
  // }, []);
  // if (error) {
  //   return <>에러: {error.message}</>;
  // }
  // if (isLoading) {
  //   return <>Loading...</>;
  // }

  // const onInsert = async (text) => {
  //   try {
  //     const data = await axios.post(`http://localhost:3001/todos/add`, {
  //       text: text,
  //     });

  //     // setIsLoading(false);
  //     //   await new Promise((resolve, reject) => {
  //     //     setTimeout(() => {
  //     //       resolve();
  //     //     }, 3000);
  //     // });
  //     setUsers(data.data);
  //   } catch (e) {
  //     setError(e);
  //   }
  //   // nextId.current++;
  // };

  // const onToggle = async (id) => {
  //   const data = await axios({
  //     url: `http://localhost:3001/todos/checked/${id}`,
  //     method: "patch",
  //   });
  //   setUsers(data.data);
  // };

  // const onRemove = (id) => {
  //   if (window.confirm("정말 삭제하시겠습니까?")) {
  //     const removeData = async () => {
  //       try {
  //         const data = await axios({
  //           url: `http://localhost:3001/todos/delete/${id}`,
  //           method: "DELETE",
  //         });
  //         setIsLoading(false);
  //         setUsers((users) => users.filter((user) => user.id !== id));
  //       } catch (e) {
  //         setError(e);
  //       }
  //     };
  //     removeData();
  //     if (error) {
  //       return <>에러: {error.message}</>;
  //     }
  //     if (isLoading) {
  //       return <>Loading...</>;
  //     }
  //   }
  // };

  // const onInsertToggle = () => {
  //   setInsertToggle((prev) => !prev);
  // };

  // const onUpdate = async (id, text) => {
  //   try {
  //     const data = await axios.put(`http://localhost:3001/todos/update/${id}`, {
  //       text: text,
  //     });
  //     // setTodos((todos) =>
  //     //   todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
  //     // );
  //     setUsers(data.data);
  //     // await new Promise((resolve, reject) => {
  //     //   setTimeout(() => {
  //     //     resolve();
  //     //   }, 3000);
  //     // });
  //   } catch (e) {
  //     setError(e);
  //   }
  //   onInsertToggle();
  //   if (error) {
  //     return <>에러: {error.message}</>;
  //   }
  //   if (isLoading) {
  //     return <>Loading...</>;
  //   }
  // };

  return (
    <div>
      <Head />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
