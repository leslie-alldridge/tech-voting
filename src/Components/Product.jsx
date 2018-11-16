import React from "react";

class Product extends React.Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
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

export default Product;
