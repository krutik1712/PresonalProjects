import React, { useState } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartSlider = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    return (
        <div>
            <button onClick={toggleCart} className="py-3 px-4 bg-[#0C831F] text-white rounded flex items-center gap-3"><HiOutlineShoppingCart className='text-xl' /> My Cart</button>
            <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleCart}></div>
            <div className={`fixed top-0 right-0 w-[30%] h-full bg-white shadow-lg transition-transform duration-300 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="text-md px-8 py-4 border-b flex items-center justify-between">
                    <h2>My Cart</h2>
                    <button onClick={toggleCart} className="text-black rounded">X</button>
                </div>
                <p className="p-4">No items in the cart.</p>
            </div>
        </div>
    );
};
export default CartSlider;