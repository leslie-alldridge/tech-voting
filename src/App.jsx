import React from "react";
import ProductList from "./Components/ProductList";
import Feedback from "./Components/Feedback";
import { ImproveHeader } from "./Components/ImproveHeader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "product"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(area) {
    console.log(area);
    this.setState({
      view: area
    });
  }

  render() {
    return (
      <div>
        <ImproveHeader />
        {this.state.view === "product" && (
          <ProductList view={this.changeView} />
        )}
        {this.state.view === "Feedback" && <Feedback />}
      </div>
    );
  }
}

export default App;
