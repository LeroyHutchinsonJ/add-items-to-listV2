import React from "react";
import ReactDOM from "react-dom";
import ListItem from "./item-list";
import "./styles.css";
import ItemList from "./item-list";

class App extends React.Component {
  state = {
    items: []
  };

  nextItemId = 0;

  makeItem() {
    return {
      id: this.nextItemId++,
      value: Math.random()
    };
  }

  addItem = () => {
    this.setState({
      items: [...this.state.items, this.makeItem()]
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addItem}>Check Me Out</button>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
