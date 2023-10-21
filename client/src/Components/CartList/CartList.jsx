import axios from "axios";
import { useEffect, useState } from "react";
import Phonepe from "../PhonePe/Phonepe";

const CartList = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const response = await axios.get("http://localhost:5000/cart_items");
            setCart(response?.data?.products);
        }
        fetchCartItems();
    }, []);

    const removeFromCart = async (itemId) => {
        try {
            await axios.get(`http://localhost:5000/removeFromCart?itemId=${itemId}`);
            setCart((prevCart) => prevCart.filter(item => item._id !== itemId));
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };


    const cartItems = cart.map(item => (
        <div key={item._id}>
            <span>{item.product}</span><br />
            <span>Rs. {item.price}</span>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
    ));

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <div className="cart-page">
                <h1>Shopping Cart</h1>
                {cartItems.length > 0 ? (
                    <>
                        {cartItems}
                        <div className="cart-total">
                            <strong>Total:</strong> ${total}
                        </div>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <Phonepe amount={total} />
        </>
    )
}

export default CartList
