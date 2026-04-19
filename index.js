
const parent = React.createElement("div", {className:'parent'},
    [ React.createElement('div',{ className:"child1"},
        [React.createElement("div", {className:"grand-child"}, "Hello parents1"),
         React.createElement("div", {className:"grand-child"}, "Hello parents2")]
      
     ),
      React.createElement('div',{ className:"child2"},
        [React.createElement("div", {className:"grand-child"}, "Hello parents1"),
         React.createElement("div", {className:"grand-child"}, "Hello parents2")]
      
     )])




const heading = React.createElement("h1", { id: "heading", className: "box-1", title:"live" }, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(parent);