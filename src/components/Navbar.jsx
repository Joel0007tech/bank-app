import { useState } from "react";
import styles from "../style";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => (
  <div>
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-{120px} h-{20px}" />
      <ul className="list"></ul>
    </nav>
  </div>
);

export default Navbar;
