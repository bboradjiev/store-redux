import React, {useState} from 'react';
import data from './data.json';
import Products from '../src/components/Products';
import Filter from './components/Filter';
import Cart from '../src/components/Cart'

function App() {

  const [state, setState] = useState({
                          products: data.products,
                          cartItems: [],
                          size: '',
                          sort: '',
  });

  const filterProducts = (event) => {
    if(event.target.value === ''){
      setState({...state, products: data.products })
    }else{
      setState({...state,
                size: event.target.value,
                products: data.products.filter( product => 
                product.availableSizes.indexOf(event.target.value) !== -1)
      });
    };
  };

  const removeFromCart = (id) => {
    const tempCart = state.cartItems.filter(item => item._id !== id)
    return setState({...state, cartItems: tempCart})
  }

  const addToCart = (product) =>{
    const cartItems = state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.map(item => {
      if(item._id === product._id){
        item.count ++;
        console.log(item.count)
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count: 1});
    };
    setState({...state, cartItems: cartItems})
  };

  const sortProducts = (event) => {
     if(event.target.value === 'Latest'){
      setState({...state,
        products: data.products.sort((a,b)=>{
      return a._id - b._id;
    })});
    }else if (event.target.value === 'Highest'){
      const tempCart = data.products.sort((a,b)=>{
        return a.price - b.price});
      setState({...state,
                products: tempCart.reverse(),
        });
      }else if(event.target.value === 'Lowest'){
      setState({...state,
                products: data.products.sort((a,b)=>{
                  return a.price - b.price;
                })});
    };    
  };

  const calculateTotal = () => {
    let total = 0;
    state.cartItems.map( item =>
    total += item.price * item.count)

      return total;
  };

  return (
    <div className='grid-container'>
        <header>
            <a href='/'>Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
              <div className='main'>
                <Filter count={state.products.length}
                        size={state.size}
                        sort={state.sort}
                        filterProducts={filterProducts}
                        sortProducts={sortProducts} />
                  <Products products={state.products}
                            addToCart={addToCart}/>
              </div>
              <div className='sidebar'>
                <Cart cartItems={state.cartItems}
                      removeFromCart={removeFromCart}
                      calculateTotal={calculateTotal}/>
              </div>
          </div>
        </main>
        <footer>
          this is the Footer
        </footer>
    </div>
  );
};

export default App;
