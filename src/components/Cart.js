import React, {useState} from 'react';
import formatCurrency from '../utils';
import Fade from 'react-reveal/Fade';


function Cart({cartItems, removeFromCart, calculateTotal, createOrder}) {
    const [showCheckOut, setShowCheckOut] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail,] = useState('');
    const [address, setAddress] = useState('');  

    const formCreateOrder = (e) => {
        e.preventDefault();
        const order = {
            name: name,
            email: email,
            address: address,
            cartItems: cartItems
        };
        createOrder(order);
    };

    return (
        <div>
            {cartItems.length === 0 ? <div className='cart cart-header'>Cart is Empty</div> 
            :
            <div className='cart cart-header'>You have {cartItems.length} in the cart</div>}
            <div>
                <div className='cart'>
                    <Fade left cascade>         
                    <ul className='cart-items'>
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div className='description'>
                                    <img src={item.image} alt={item.title}/>
                                    {item.title}
                                </div>
                                <div>
                                    <div className='right'>
                                        {formatCurrency(item.price)} x {item.count} {" "}
                                        <button className='button' onClick={()=>removeFromCart(item._id)}>
                                            <strong>Remove</strong>
                                        </button>
                                    </div>                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                    </Fade> 
                </div>    
                {cartItems.length !== 0 ? 
                        <div className='cart'>
                            <div className='total'>
                                <div>
                                    Total Price is: {formatCurrency(calculateTotal())}
                                </div>
                                <button onClick={()=>setShowCheckOut(true)} className='button primary'>Proceed</button>
                            </div>                 
                        </div>
                        
                        :
                        '' } 
                        {showCheckOut ? 
                        <div className='cart'>
                            <form onSubmit={formCreateOrder}>
                                <Fade right cascade>
                                    <ul className='form-container'>
                                        <li>
                                            <label>Email</label>
                                            <input name='email' type='email'  required onChange={(e) => setEmail(e.target.value)}></input>
                                        </li>
                                        <li>
                                            <label>Name</label>
                                            <input name='name' type='text' required onChange={(e) => setName(e.target.value)}></input>
                                        </li>
                                        <li>
                                            <label>Address</label>
                                            <input name='address' type='text' required onChange={(e) => setAddress(e.target.value)}></input>
                                        </li>
                                        <li>
                                            <button className='button primary' type='submit'>Checkout</button>
                                        </li>
                                    </ul>
                                </Fade>
                            </form>
                        </div>
                        : ''}
            </div>
        </div>
    )
}

export default Cart
