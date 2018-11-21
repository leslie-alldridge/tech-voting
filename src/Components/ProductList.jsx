import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { fetchItemsAction } from "../actions/index";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.fetchItems();
    console.log(this.props.state);
  }

  handleProductUpVote = productId => {
    const nextProducts = this.state.products.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts
    });
  };

  handleProductDownVote = productId => {
    const nextProducts = this.state.products.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes - 1
        });
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts
    });
  };

  render() {
    const productList = this.props.state.sort((a, b) => b.votes - a.votes);

     const newList = productList.map(post => (
      <Product
      key={"product-" + post.id}
      id={post.id}
      title={post.title}
      description={post.description}
      url={post.url}
      votes={post.votes}
      submitterAvatarUrl={post.submitterAvatarUrl}
      productImageUrl={post.productImageUrl}
      onVote={this.handleProductUpVote}
      onDownVote={this.handleProductDownVote}
    />
     ))
    return (
      <div>
        <div id="buttons" className="ui two column centered grid">
          <div className="ui large buttons">
            <button
              className="ui blue button"
              onClick={() => this.props.view("Feedback")}
            >
              Send Feedback
            </button>
            <div className="or" />
            <button
              className="ui blue button"
              onClick={() => this.props.view("Add")}
            >
              Add Improvement
            </button>
          </div>
        </div>
        <div className="ui unstackable items">{newList}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => {
      dispatch(fetchItemsAction());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
