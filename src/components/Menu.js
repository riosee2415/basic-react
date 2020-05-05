import React from "react";

class Menu extends React.Component {
  render() {
    // return은 절대로 2개 이상의 컴포넌트를 반환할 수 없다.
    return (
      <div>
        <ul>
          <li onClick={this.props.action}>{this.props.item1}</li>
          <li>{this.props.item2}</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
