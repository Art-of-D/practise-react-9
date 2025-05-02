import { useState } from "react";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className="container">
      <h2>User Book</h2>
      <Input addUser={addUser} />
      <List people={users} />
    </div>
  );
}

export default App;
