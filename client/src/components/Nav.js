import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="mainMenu">
        <h2 className="logo">Isaiji</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/cart "></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
