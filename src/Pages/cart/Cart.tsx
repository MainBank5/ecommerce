import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity,} from "../../store/cart/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const grandTotal = useSelector((state: RootState) => state.cart.cartTotalAmount);
  const handleIncrement = (itemId: number) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId: number) => {
    // Dispatch the decrementQuantity action
    dispatch(decrementQuantity(itemId));
  };
  
  
  

  return (
   
    
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-3xl py-8 px-4 mt-20">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">Your Cart</h2>
          <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div key={item._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="flex items-center p-4">
                <img src={item.image} alt="productimg" className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex justify-between items-center bg-gray-100 px-4 py-2">
                <div className="flex items-center">
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2" onClick={() => handleDecrement(item._id)}>-</button>
                  <input type="number" value={item.quantity} className="w-12 text-center" readOnly />
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-md ml-2" onClick={() => handleIncrement(item._id)}>+</button>
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <p className="text-2xl font-semibold">Grand Total: ${grandTotal.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none mr-4">
            CheckOut
          </button>
          <button className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 focus:outline-none" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;




