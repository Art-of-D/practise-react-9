import avatar from "../assets/default-avatar.svg";
import { useState } from "react";

const Person = ({
  removeUser,
  id,
  name,
  nickName = "shakeAndBake",
  email,
  images,
}) => {
  const [checked, setChecked] = useState(true);
  const img = images?.[0]?.small?.url || avatar;
  const handleClick = (e) => {
    e.preventDefault();
    removeUser(id);
  };
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
      <p hidden={checked}>{email}</p>
      <input
        type="checkbox"
        id="email"
        onChange={() => setChecked(!checked)}
      ></input>
      <label htmlFor="email">show email?</label>
      <button type="button" className="btn" onClick={handleClick}>
        remove
      </button>
    </div>
  );
};
export default Person;
