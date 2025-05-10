const Input = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const user = Object.fromEntries(data);

    if (user.name === "" || user.email === "") {
      return;
    }

    const fakeId = Date.now();
    addUser({ id: fakeId, name: user.name, email: user.email });
    e.currentTarget.reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Add new user</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" id="name" name="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-input" id="email" name="email" />
      </div>
      <button type="submit" className="btn btn-block">
        add user
      </button>
    </form>
  );
};
export default Input;
