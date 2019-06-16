import React from "react";
// import { Menu, Icon } from "antd";
// import Menu from "./Menu";

// const { SubMenu } = Menu;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderStatus: false
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle = e => {
    const currentState = this.state.renderStatus;
    this.setState({
      renderStatus: !currentState
    });
  };

  render() {
    const listItems = (
      <ul>
        <li>SubMenu Item 1</li>
        <li>SubMenu Item 2</li>
        <li>SubMenu Item 3</li>
      </ul>
    );
    return (
      <div>
        <button onClick={this.onToggle}>{this.props.title || "default"}</button>
        {this.props.toggled ? listItems : this.state.renderStatus && listItems}
      </div>
    );
  }
}

export default Dropdown;
