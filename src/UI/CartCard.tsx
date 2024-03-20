import { IoIosRemoveCircleOutline } from "react-icons/io"
import { useDispatch } from "react-redux";
import {decrementQuantity, incrementQuantity,  removefromCart, } from "../store/cart/cartSlice";
type Product = {
  _id: number;
  category: string;
  brand: string;
  image: string;
  price: number;
  title: string;
  description: string;
  quantity: number;
};

type ItemsType = {
  items: Product[]
}

const CartCard = ({ items }: ItemsType) => {
  const dispatch = useDispatch();

  const handleIncrement = (itemId: number) => {
    dispatch(incrementQuantity(itemId));
};

 const handleDecrement = (itemId: number) => {
    dispatch(decrementQuantity(itemId));
};
  const handleRemove = (itemId: number) => {
    dispatch(removefromCart(itemId));
  }

  

  return (
    <div>
      {items.map((item) => (
        <div key={item._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">

          <div className="flex flex-wrap mx-2 items-center" >
            <button onClick={() => handleRemove(item._id)} className=" m-2 text-red-500 cursor-pointer" ><IoIosRemoveCircleOutline /></button>
          </div>

          <div className="flex items-center p-4">
            <img src={item.image} alt="productimg" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-600">Price: ${item.price}</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-100 px-4 py-2">
            <div className="flex items-center">
              <button className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2" onClick={() => handleDecrement(item._id)}>-</button>
              <input type="number" value={item.quantity} className="w-12 text-center" readOnly />
              <button className="bg-blue-500 text-white py-1 px-2 rounded-md ml-2" onClick={() => handleIncrement(item._id)}>+</button>
            </div>
            <p>Total: ${(item.price * item.quantity)}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default CartCard