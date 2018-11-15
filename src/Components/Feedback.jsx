import React from "react";

class FeedBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: "no selection",
      knowledge: "no selection",
      other: "no additional feedback"
    };
    this.formUpdate = this.formUpdate.bind(this);
  }

  formUpdate(e) {
    console.log(e.target.name);
    let name = e.target.name;
    this.setState({
      [name]: !this.state[name]
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="item">
        <p>Do you have the rights tools to provide world class support?</p>
        <button name="yes">Yes</button>
        <button name="no">No</button>
        <div
          class="ui submit button"
          name="knowledge"
          onClick={this.formUpdate}
        >
          Submit
        </div>
      </div>
    );
  }
}

export default FeedBack;
