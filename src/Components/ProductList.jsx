import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { fetchItemsAction } from "../actions/index";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "Stop SalesForce from freezing",
          description: "Going above four open tabs results in page lockup.",
          url: "#",
          votes: 0,
          submitterAvatarUrl: "images/avatars/Nicole.png",
          productImageUrl: "images/products/image-aqua.png"
        },
        {
          id: 2,
          title: "Regional Slack Channels",
          description: "Improve internal communications.",
          url: "#",
          votes: 0,
          submitterAvatarUrl: "images/avatars/Lines.png",
          productImageUrl: "images/products/image-rose.png"
        },
        {
          id: 3,
          title: "New wording for Status Page",
          description: "Provide a #human experience for our users.",
          url: "#",
          votes: 0,
          submitterAvatarUrl: "images/avatars/Vinh.png",
          productImageUrl: "images/products/image-steel.png"
        },
        {
          id: 4,
          title: "SQL querying tool",
          description: "Avoid waiting for JIRAs.",
          url: "#",
          votes: 0,
          submitterAvatarUrl: "images/avatars/Steve.png",
          productImageUrl: "images/products/image-yellow.png"
        }
      ],
      redux: [] || this.props.state,
      test: "test"
    };
  }
  componentDidMount() {
    this.props.fetchItems();
    console.log(this.props.state);
  }

  // componentDidMount() {
  //   this.setState({ products: this.state.products });
  //   console.log(this.props);

  //   this.setState({ redux: this.props.state.data });
  // }

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
    // const newList = Object.keys(this.props.state);
    for (const key of Object.keys(this.props.state)) {
      console.log(this.props.state[key]);
      // return (
      //   <Product
      //     key={"product-" + this.props.state[key].id}
      //     id={this.props.state[key].id}
      //     title={this.props.state[key].title}
      //     description={this.props.state[key].description}
      //     url={this.props.state[key].url}
      //     votes={this.props.state[key].votes}
      //     submitterAvatarUrl={this.props.state[key].submitterAvatarUrl}
      //     productImageUrl={this.props.state[key].productImageUrl}
      //     onVote={this.handleProductUpVote}
      //     onDownVote={this.handleProductDownVote}
      //   />
      // );
    }
    // console.log(newList);

    const productList = this.state.products.sort((a, b) => b.votes - a.votes);

    const productComponents = productList.map(product => (
      <Product
        key={"product-" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
        onDownVote={this.handleProductDownVote}
      />
    ));
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
        <div className="ui unstackable items">{productComponents}</div>
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
