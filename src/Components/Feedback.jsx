import React from "react";
import * as emailjs from "emailjs-com";

class FeedBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: "no selection",
      fiveMill: "no selection",
      finalThoughts: "no additional feedback",
      loading: false,
      saved: false,
      toggleMsg: true,
      err: false
    };
    this.formUpdate = this.formUpdate.bind(this);
    this.handleChangeTools = this.handleChangeTools.bind(this);
    this.handleChangeFiveMill = this.handleChangeFiveMill.bind(this);
    this.finalThoughts = this.finalThoughts.bind(this);
    this.toggleMsg = this.toggleMsg.bind(this);
  }

  formUpdate() {
    let templateParams = this.state;
    this.setState({
      loading: true
    });
    emailjs
      .send("gmail", "tech", templateParams, "user_RxhvyGQEKc5Qg6UrvouN6")
      .then(
        response => {
          this.setState({
            loading: false,
            saved: true,
            toggleMsg: true,
            err: false
          });
        },
        err => {
          this.setState({
            loading: false,
            err: true,
            toggleMsg: true
          });
        }
      );
  }

  toggleMsg() {
    this.setState({
      toggleMsg: !this.state.toggleMsg
    });
  }

  handleChangeTools(e) {
    this.setState({
      tools: e.target.name
    });
  }

  handleChangeFiveMill(e) {
    this.setState({
      fiveMill: e.target.value
    });
  }

  finalThoughts(e) {
    this.setState({
      finalThoughts: e.target.value
    });
  }

  render() {
    return (
      <div id="feedForm" className="item">
        <div>
          <p>Do you have the rights tools to provide world class support?</p>
          {this.state.tools !== "Yes" && (
            <button
              class=" ui toggle button"
              onClick={this.handleChangeTools}
              name="Yes"
            >
              Yes
            </button>
          )}
          {this.state.tools === "Yes" && (
            <button
              class="positive ui toggle button"
              onClick={this.handleChangeTools}
              name="Yes"
            >
              Yes
            </button>
          )}
          {this.state.tools !== "No" && (
            <button
              class="ui toggle button"
              onClick={this.handleChangeTools}
              name="No"
            >
              No
            </button>
          )}
          {this.state.tools === "No" && (
            <button
              class="negative ui toggle button"
              onClick={this.handleChangeTools}
              name="No"
            >
              No
            </button>
          )}
        </div>
        <p id="question">
          What things do you think we'll need, in order to service five million
          users?
        </p>
        <div class="field">
          <textarea
            id="textArea"
            onChange={this.handleChangeFiveMill}
            rows="3"
          />
        </div>

        <p id="question">Any Other Thoughts or Feedback?</p>
        <div class="field">
          <textarea id="textArea" onChange={this.finalThoughts} rows="3" />
        </div>
        {!this.state.loading && (
          <div
            class="positive ui submit button"
            name="knowledge"
            onClick={this.formUpdate}
          >
            Submit
          </div>
        )}
        {this.state.loading && (
          <div class="ui positive loading button">Loading</div>
        )}
        <div
          class="ui submit button"
          name="knowledge"
          onClick={() => this.props.view("Product")}
        >
          Back
        </div>
        {this.state.saved && this.state.toggleMsg && (
          <div class="ui success message">
            <i onClick={this.toggleMsg} class="close icon" />
            <div class="header">Your feedback sent successfully.</div>
            <p>Thanks for doing this, you're a star!</p>
          </div>
        )}
        {this.state.err && this.state.toggleMsg && (
          <div class="ui negative message">
            <i onClick={this.toggleMsg} class="close icon" />
            <div class="header">There was an error.</div>
            <p>Please try again. If it persists, let a Team Leader know.</p>
          </div>
        )}
      </div>
    );
  }
}

export default FeedBack;
