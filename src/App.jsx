import { useState } from "react";
import List from "./components/List";
import Input from "./components/Input";

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
      <h2>User Book</h2>
      <Input addUser={addUser} />
      <List people={users} removeUser={removeUser} />
    </div>
  );
}

export default App;
