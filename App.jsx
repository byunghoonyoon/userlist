import { useEffect, usestate } from "react";
import axios from "axios";
import { useState } from "react";
import UserListItem from "./components/UserListItem";

const App = () => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/users",
          method: "get",
        });
        setUsers = data.data;
        console.log(data);
        console.log(users);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <UserListItem></UserListItem>
    </div>
  );
};

export default App;
