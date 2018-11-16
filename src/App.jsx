import React from "react";
import ProductList from "./Components/ProductList";
import Feedback from "./Components/Feedback";
import { ImproveHeader } from "./Components/ImproveHeader";
import { FeedbackHeader } from "./Components/FeedbackHeader";
import { AddHeader } from "./Components/AddHeader";
import AddForm from "./Components/AddForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Product"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(area) {
    this.setState({
      view: area
    });
  }

  render() {
    return (
      <div>
        {this.state.view === "Product" && <ImproveHeader />}
        {this.state.view === "Feedback" && <FeedbackHeader />}
        {this.state.view === "Add" && <AddHeader />}
        {this.state.view === "Product" && (
          <ProductList view={this.changeView} />
        )}
        {this.state.view === "Feedback" && <Feedback view={this.changeView} />}
        {this.state.view === "Add" && <AddForm view={this.changeView} />}
      </div>
    );
  }
}

export default App;
