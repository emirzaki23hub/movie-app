import React from "react";
import "../styles/Header.css";
import Search from "./Search";

function Header(props) {
  const { search } = props;
  return (
    <header className="header">
      <h1 style={{ textAlign: "left" }}>
        <img
          className="img-logo"
          style={{ width: "48px", height: "48px", margin: "15px" }}
          alt="logo"
          src="1.png"
        ></img>
        {props.text}
      </h1>

      <Search search={search} />
    </header>
  );
}

export default Header;
