import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { get, set } from "../utils/localstorage";

class Product extends Component {
  handleUpVote = () => {
    this.props.fetchItems();
    this.props.addToDo("added");
    let votesUsed = get("voted");
    if (votesUsed >= 3) {
      alert("No votes remaining");
    } else {
      set("voted", Number(votesUsed) + 1);
      this.props.onVote(this.props.id);
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
          </div>
          <div className="description">
            <a href="#">{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by: </span>
            <img
              src={this.props.submitterAvatarUrl}
              alt=""
              className="ui avatar image"
            />
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
