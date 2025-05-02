import { useState } from "react";
const Input = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeId = Date.now();
    addUser({ id: fakeId, name, email });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Add new user</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        add user
      </button>
    </form>
  );
};
export default Input;
