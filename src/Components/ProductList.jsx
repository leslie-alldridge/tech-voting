import React from 'react';
import Product from './Product'

class ProductList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          products: [
            {
              id: 1,
              title: 'Yellow Pail',
              description: 'On-demand sand castle construction expertise.',
              url: '#',
              submitterAvatarUrl: 'images/avatars/daniel.jpg',
              productImageUrl: 'images/products/image-aqua.png',
            },
            {
              id: 2,
              title: 'Supermajority: The Fantasy Congress League',
              description: 'Earn points when your favorite politicians pass legislation.',
              url: '#',
              submitterAvatarUrl: 'images/avatars/kristy.png',
              productImageUrl: 'images/products/image-rose.png',
            },
            {
              id: 3,
              title: 'Tinfoild: Tailored tinfoil hats',
              description: 'We already have your measurements and shipping address.',
              url: '#',
              submitterAvatarUrl: 'images/avatars/veronika.jpg',
              productImageUrl: 'images/products/image-steel.png',
            },
            {
              id: 4,
              title: 'Haught or Naught',
              description: 'High-minded or absent-minded? You decide.',
              url: '#',
              submitterAvatarUrl: 'images/avatars/molly.png',
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
