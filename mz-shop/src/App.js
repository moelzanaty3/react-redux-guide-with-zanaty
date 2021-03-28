const Product = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Mens Cotton Jacket"),
        React.createElement("h2", {}, "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions,"),
        React.createElement("h2", {}, "55.99$"),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "MZ Shop"),
        React.createElement(Product),
        React.createElement(Product),
        React.createElement(Product),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));