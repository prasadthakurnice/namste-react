const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World  from React!!"
);
root.render(heading);

const heading2 = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World  from React!!.........."
  );

  const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {id: "child1"}, "Nested Child"),
      React.createElement("h1", {id: "child2"}, "Nested Child1"),
    ])
  );
  root.render(parent);

