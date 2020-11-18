import React from "react";
import "./header.css";
export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">{props.title} </h1>
        {props.contentHeader}
      </div>
    </header>
  );
}
