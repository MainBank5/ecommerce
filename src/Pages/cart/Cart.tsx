import CartCard from "../../UI/CartCard";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { clearAllItems } from "../../store/cart/cartSlice";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const grandTotal = useSelector((state: RootState) => state.cart.cartTotalAmount);
  
    const handleRemoveAll = ()  =>{
        if (window.confirm('Do you want to remove all items?')) {
            dispatch(clearAllItems())
        }
    }
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full max-w-3xl py-8 px-4 mt-20">
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-semibold text-gray-800">Your Cart</h2>
                    <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mb-6" />
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                   <CartCard items={cartItems}/>
                    <div className="flex flex-col justify-center mt-4">
                        <p className="text-2xl self-center font-semibold mb-2">Grand Total: ${grandTotal.toFixed(2)}</p>
                        {cartItems.length >= 1 ? <button onClick={handleRemoveAll} className="bg-red-500 text-nowrap hover:bg-red-600 text-center px-10 py-3 rounded-lg mt-2 self-center">
                             Clear Cart
                        </button> : "" }
                        
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none mr-4">
                        CheckOut
                    </button>
                    <button className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 focus:outline-none" onClick={() => navigate("/")}>
                    {cartItems.length < 1 ? "Start Shopping" : "Continue Shopping"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;






