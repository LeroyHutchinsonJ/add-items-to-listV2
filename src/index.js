import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class ItemList extends React.Component {
  state = {
    items: []
  };

  nextId = 0;

  addToItems = () => {
    return { id: this.nextId++, value: Math.random() };
  };

  addItemImmutably = () => {
    this.setState({ items: [...this.state.items, this.addToItems()] });
  };
  render() {
    return <div />;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ItemList />, rootElement);
