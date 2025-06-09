import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello React ");
// console.log(heading);
const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5" id="heading">
    {elem} Hello React using JSX
  </h1>
);

const title = <h1 className="newWay">Hello World from titlle</h1>;
// console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent2 = () => (
  <h1 className="anish"> Hello React new Way </h1>
);

console.log(HeadingComponent2);
const number = 1000;

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h2>{number}</h2>
      {title}
      <h1>Hello React Functional component</h1>
    </div>
  );
};

console.log(HeadingComponent);
// root.render(heading);
// root.render(heading);
root.render(<HeadingComponent />);
