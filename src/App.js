import React, {useState} from 'react';
import data from './data.json';
import Products from '../src/components/Products';
import Filter from './components/Filter';

function App() {

  const [state, setState] = useState({
                          products: data.products,
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

  const sortProducts = (event) => {
    console.log(data.products)
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
                  <Products products={state.products}/>
              </div>
              <div className='sidebar'>
                  CartItems
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
