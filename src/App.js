import React from "react";
import Menu from "./components/Menu";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu item1="HOME" item2="INTRO" action={this._alertHandler} />

        <Menu item1="TEST" item2="EXAM" action={this._alertHandler} />

        <Menu item1="라이언" item2="어피치" action={this._alertHandler} />
      </div>
    );
  }

  _alertHandler = () => {
    alert("Why? 왜불러요?");
  };
}

export default App;
