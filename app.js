
const parent = React.createElement("div", { id: 'parent' },

    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am H1 tag"),
        React.createElement("h2", {}, "I am H2 tag")]),

    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am child2 H1 tag"),
        React.createElement("h2", {}, "I am child2 H2 tag")])

    ])

const h1 = React.createElement('h1', { id: "heading" }, "Hello React");
console.log(h1)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);