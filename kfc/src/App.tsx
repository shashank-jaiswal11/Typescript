import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


import * as React from 'react';
import './App.css';
import MiniCart from './components/mini-cart/MiniCart';
import ProductList from './components/product-list/ProductList';
import ICartItem from './models/cartItem';
import IProduct from './models/product';

interface IState {
  cart: ICartItem[];
  products: IProduct[];
};

class App extends React.Component<{}, IState> {
  public state : Readonly<IState> = {
    cart: [],
    products: [
      
    ]
  };

   public componentWillMount(){
     const promise = axios.get('http://5b20924cca762000147b2568.mockapi.io/products');
    promise.then((response) =>{
      this.setState({
        products: response.data
      });
    });
   }

  

  public render() {
    return (
      <div className="container">
        <nav className="site-header sticky-top row">
          <div className="col-4">
            <h3>Food App</h3>
          </div>          
          <div className="col-4">
              <MiniCart cart={this.state.cart} />
          </div>
        </nav>
        <div className="container">            
            <ProductList list={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;