import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    items: []
  };

  nextId = 0;

  nextItemId = 0;
  makeItem() {
    return {
      id: this.nextItemId++,
      value: Math.random()
    };
  }

  addItemImmutably = () => {
    this.setState({
      items: [...this.state.items, this.makeItem()]
    });
  };

  render() {
    return (
      <div>
        {" "}
        <button onClick={this.addItemImmutably()}>
          {" "}
          Press Me To Increase List{" "}
        </button>
        {}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
