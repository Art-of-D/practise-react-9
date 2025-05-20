import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

export const useAppContext = () => useContext(NavbarContext);
export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "Art" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav>
        <h1>Navbar</h1>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
