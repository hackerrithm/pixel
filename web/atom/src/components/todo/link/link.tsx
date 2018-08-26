import React, { Component } from "react";

export default class Link extends Component<any, any> {

  render() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.active}
        style={{
          marginLeft: "4px"
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

// const Link = ({ active, children, onClick }) => (
//   <button
//      onClick={onClick}
//      disabled={active}
//      style={{
//          marginLeft: '4px',
//      }}
//   >
//     {children}
//   </button>
// )


// export default Link