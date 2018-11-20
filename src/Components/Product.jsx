import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { get, set } from "../utils/localstorage";
const uuidv1 = require("uuid/v1");

class Product extends Component {
  state = {
    comments: false
  };

  handleComments = () => {
    this.setState({
      comments: !this.state.comments
    });
  };

  handleUpVote = () => {
    let uu = uuidv1();
    console.log(uu);
    // let idea = {
    //   id: 4,
    //   title: "SQL querying tool",
    //   description: "Avoid waiting for JIRAs.",
    //   url: "#",
    //   votes: 0,
    //   submitterAvatarUrl: "images/avatars/Steve.png",
    //   productImageUrl: "images/products/image-yellow.png"
    // };
    this.props.fetchItems();
    //this.props.addToDo(idea, uu);
    let votesUsed = get("voted");
    if (votesUsed >= 3) {
      alert("No votes remaining");
    } else {
      set("voted", Number(votesUsed) + 1);
      this.props.onVote(this.props.id);
    }
  };

  handleDownVote = () => {
    let uu = uuidv1();
    console.log(uu);
    // let idea = {
    //   id: 4,
    //   title: "SQL querying tool",
    //   description: "Avoid waiting for JIRAs.",
    //   url: "#",
    //   votes: 0,
    //   submitterAvatarUrl: "images/avatars/Steve.png",
    //   productImageUrl: "images/products/image-yellow.png"
    // };
    this.props.fetchItems();
    //this.props.addToDo(idea, uu);
    let votesUsed = get("voted");
    if (votesUsed <= 3 && votesUsed > 0) {
      set("voted", Number(votesUsed) - 1);
      this.props.onDownVote(this.props.id);
    } else {
      alert("you cannot go negative votes");
    }
  };

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} alt="Product" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i id="icon" className="large angle double up icon" />
            </a>
            {this.props.votes}
            <a onClick={this.handleDownVote}>
              <i id="icon" className="large angle double down icon" />
            </a>
          </div>
          <div className="description">
            <h4 id="productTitle">{this.props.title}</h4>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by: </span>
            <img
              src={this.props.submitterAvatarUrl}
              alt=""
              className="ui avatar image"
            />
            <p onClick={this.handleComments} id="comments">
              <i>Toggle comments</i>
            </p>

            {this.state.comments && (
              <div class="ui comments">
                <h3 class="ui dividing header">Comments</h3>
                <div class="comment">
                  <a class="avatar">
                    <img src={this.props.submitterAvatarUrl} />
                  </a>
                  <div class="content">
                    <h4 id="productTitle">Nicole</h4>
                    <div class="text">This would be lovely!</div>
                  </div>
                </div>
                <form class="ui reply form">
                  <div class="field">
                    <textarea rows="2" />
                  </div>
                  <div class="ui blue labeled submit icon button">
                    <i class="icon edit" /> Add Reply
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(Product);
