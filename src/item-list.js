import React from "react";
import PropTypes from "prop-types";

class ItemList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul>
        {this.props.items.map(items => (
          <li key={items.id}>{items.value}</li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
