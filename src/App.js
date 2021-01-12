import React, {useState} from 'react';
import data from './data.json';
import Products from '../src/components/Products';

function App() {

  const [state, setState] = useState({
                          products: data.products,
                          size: '',
                          sort: '',
  });

  return (
    <div className='grid-container'>
        <header>
            <a href='/'>Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
              <div className='main'>
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
