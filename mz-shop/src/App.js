const Product = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.title),
        React.createElement("h2", {}, props.description),
        React.createElement("h2", {}, props.price),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "MZ Shop"),
        React.createElement(Product, {
            title: "Samsung SE450",
            description: "21.5-inch desktop business monitor offers superior ergonomics and eco-friendly features – constructed with 30%",
            price: "89.99$",
        }),
        React.createElement(Product, {
            title: "Mac Book Pro",
            description: "our perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            price: "700$",
        }),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));