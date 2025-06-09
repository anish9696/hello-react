import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "child1" }, // ✅ add key here
    [
      React.createElement(
        "h1",
        { id: "hello", key: "h1tag" },
        "This is Hello React"
      ),
      React.createElement(
        "h2",
        { id: "hello2", key: "h2tag" },
        "This is Hello React 2"
      ),
    ]
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
