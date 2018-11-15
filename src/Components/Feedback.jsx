import React from "react";
import * as emailjs from "emailjs-com";

class FeedBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: "no selection",
      fiveMill: "no selection",
      finalThoughts: "no additional feedback"
    };
    this.formUpdate = this.formUpdate.bind(this);
    this.handleChangeTools = this.handleChangeTools.bind(this);
    this.handleChangeFiveMill = this.handleChangeFiveMill.bind(this);
    this.finalThoughts = this.finalThoughts.bind(this);
  }

  formUpdate() {
    console.log("saved");
    let templateParams = this.state;
    console.log(this.state);
    emailjs
      .send("gmail", "tech", templateParams, "user_RxhvyGQEKc5Qg6UrvouN6")
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          console.log("FAILED...", err);
        }
      );
  }

  handleChangeTools(e) {
    console.log(e.target.name);
    this.setState({
      tools: e.target.name
    });
  }

  handleChangeFiveMill(e) {
    console.log(e.target.value);
    this.setState({
      fiveMill: e.target.value
    });
  }

  finalThoughts(e) {
    console.log(e.target.value);
    this.setState({
      finalThoughts: e.target.value
    });
  }

  render() {
    return (
      <div className="item">
        <p>Do you have the rights tools to provide world class support?</p>
        <button onClick={this.handleChangeTools} name="yes">
          Yes
        </button>
        <button onClick={this.handleChangeTools} name="no">
          No
        </button>

        <p>
          What things do you think we'll need, in order to service five million
          users?
        </p>
        <div class="field">
          <textarea onChange={this.handleChangeFiveMill} rows="2" />
        </div>

        <p>Any Other Thoughts or Feedback?</p>
        <div class="field">
          <textarea onChange={this.finalThoughts} rows="3" />
        </div>
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
