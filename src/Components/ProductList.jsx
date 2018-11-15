import React from 'react';
import Product from './Product'

class ProductList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          products: [
            {
              id: 1,
              title: 'Stop SalesForce from freezing',
              description: 'Going above four open tabs results in page lockup.',
              url: '#',
              votes: 0,
              submitterAvatarUrl: 'images/avatars/Nicole.png',
              productImageUrl: 'images/products/image-aqua.png',
            },
            {
              id: 2,
              title: 'Regional Slack Channels',
              description: 'Improve internal communications.',
              url: '#',
              votes: 0,
              submitterAvatarUrl: 'images/avatars/Lines.png',
              productImageUrl: 'images/products/image-rose.png',
            },
            {
              id: 3,
              title: 'New wording for Status Page',
              description: 'Provide a #human experience for our users.',
              url: '#',
              votes: 0,
              submitterAvatarUrl: 'images/avatars/Vinh.png',
              productImageUrl: 'images/products/image-steel.png',
            },
            {
              id: 4,
              title: 'SQL querying tool',
              description: 'Avoid waiting for JIRAs.',
              url: '#',
              votes: 0,
              submitterAvatarUrl: 'images/avatars/Steve.png',
              productImageUrl: 'images/products/image-yellow.png',
            },
          ],
      }
  }

  componentDidMount() {
      this.setState({ products: this.state.products});
      
  }

  handleProductUpVote = (productId) => {
      const nextProducts = this.state.products.map((product) => {
          if(product.id === productId) {
              return Object.assign({}, product, {
                  votes: product.votes + 1,
              })
          } else {
              return product;
          }
      });

      this.setState({
          products: nextProducts,
      });
  }

  render() {
      const productList = this.state.products.sort((a,b) => (
          b.votes - a.votes
      ));
      
       const productComponents = productList.map((product) => (
          <Product
              key={'product-' + product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              url={product.url}
              votes={product.votes}
              submitterAvatarUrl={product.submitterAvatarUrl}
              productImageUrl={product.productImageUrl}
              onVote={this.handleProductUpVote}
          />
          ));
      return (
          <div className="ui unstackable items">  
              {productComponents}
          </div>
      );
  }
}

export default ProductList
