import { useState } from "react";
const Input = ({ addUser }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name === "" || user.email === "") {
      return;
    }
    const fakeId = Date.now();
    addUser({ id: fakeId, name: user.name, email: user.email });
    setUser({ name: "", email: "" });
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
          id="name"
          value={user.name}
          name="name"
          onChange={handleInput}
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
          value={user.email}
          name="email"
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-block">
        add user
      </button>
    </form>
  );
};
export default Input;
