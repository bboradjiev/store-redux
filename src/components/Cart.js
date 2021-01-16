import React from 'react'
import formatCurrency from '../utils'

function Cart({cartItems, removeFromCart, calculateTotal}) {

    return (
        <div>
            {cartItems.length === 0 ? <div className='cart cart-header'>Cart is Empty</div> 
            :
            <div className='cart cart-header'>You have {cartItems.length} in the cart</div>}
            <div>
                <div className='cart'>
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
                </div>     
                {cartItems.length !== 0 ? 
                        <div className='cart'>
                            <div className='total'>
                                <div>
                                    Total Price is: {formatCurrency(calculateTotal())}
                                </div>
                                <button className='button primary'>Proceed</button>
                            </div>                 
                        </div>
                        :
                        '' } 
            </div>
        </div>
    )
}

export default Cart
