import { useState } from "react";
import List from "./components/List";
import Input from "./components/Input";
import Toggle from "./components/Toggle";
import Teacher from "./components/Teacher";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div className="container">
      <Navbar />
      <h2>User Book</h2>
      <Input addUser={addUser} />
      <List people={users} removeUser={removeUser} />
      <Toggle />
      <Teacher />
    </div>
  );
}

export default App;
