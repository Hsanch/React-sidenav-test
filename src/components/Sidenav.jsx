import React from "react";
import Dropdown from "./Dropdown";

// TODO: Add functionality to toggle Dropdowns from this Sidenav Component
// Will keeping track of the state in this component as well as in the
// Dropdown Component

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   renderStatus: {
    //     item1: false,
    //     item2: false,
    //     item3: false
    //   }
    // };
    // this.onToggle = this.onToggle.bind(this);
    this.parseNameIntoKey = this.parseNameIntoKey.bind(this);
  }

  // onToggle = e => {
  //   const currentState = this.state.renderStatus;
  //   const newState = {};
  //   newState[e.target.name] = !currentState[e.target.name];
  //   this.setState({
  //     renderStatus: { ...currentState, ...newState }
  //   });
  // };

  parseNameIntoKey = itemName => {
    return itemName
      .split(" ")
      .join("-")
      .toString()
      .toLowerCase();
  };

  // Use this once able to trigger Dropdown toggles from the sideNav container
  // toggled={this.state.renderStatus[parsedName]}
  render() {
    const sideNavitems = this.props.items.map(item => {
      const parsedName = this.parseNameIntoKey(item);
      return <Dropdown key={parsedName} name={parsedName} title={item} />;
    });
    return <div>{sideNavitems}</div>;
  }
}

export default Sidenav;
