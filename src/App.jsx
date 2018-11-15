import React from 'react';
import ProductList from './Components/ProductList';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: 'product'
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(area){
    console.log(area);
    this.setState({
      view: area
    })
  }

  render() {
    return (
      <div>
          <ProductList view={this.changeView}/>
      </div>
    );
  }
}

export default App;