import React from "react";
import PropTypes from "prop-types";

class ItemList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired
  };
}

export default ItemList;
