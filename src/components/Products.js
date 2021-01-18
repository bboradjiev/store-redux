import React, {useState} from 'react';
import formatCurrency from '../../src/utils';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';


function Products({products, addToCart}) {
    const [modal, setModal] = useState(null);
    console.log(modal)

    const openModal =(product) => {
        setModal(product);
    };

    const closeModal = () => {
        setModal(null);
    };

     return (
        <div>
            <Fade bottom cascade>
            <ul className='products'> 
                {products.map(product => 
                    <li key={product._id}>
                        <div className='product'>
                            <a href={`# ${product._id}`} onClick={()=>openModal(product)}>
                                <img src={product.image} alt={product.title}></img>
                                <p>
                                    {product.title}
                                </p>
                            </a>
                            <div className='product-price'>
                                <div>{formatCurrency(product.price)}</div>
                                <button onClick={()=> addToCart(product)} className='button primary'>Add to Cart</button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            </Fade>
            {modal ?    <Modal isOpen={true} >
                            <Zoom>
                                <button className='close-modal' onClick={closeModal}>x</button>
                                <div className='product-details'>
                                    <img src={modal.image } alt={modal.title}></img>
                                <div className='product-details-description'>
                                    <strong><p>{modal.title}</p></strong>
                                    <p>{modal.description}</p>
                                    <p>Available Sizes
                                        {modal.availableSizes.map(size => <span>{' '}{size}</span>)}
                                    </p>
                                    <div className='product-price'>
                                        <div>{formatCurrency(modal.price)}</div>
                                        <button className='button primary' onClick={() =>{
                                                addToCart(modal)
                                                closeModal() 
                                            }
                                        }>Add to Cart</button>
                                    </div>
                                </div>
                                </div>
                                
                            </Zoom>
                        </Modal> : ''}
        </div>
    );
};

export default Products;
