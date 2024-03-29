import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../store/store";
import { addtoCart } from "../store/cart/cartSlice";


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

type ProductsType = {
  products: Product[];
};



const ProductsCard = ({ products }: ProductsType) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)
  const dispatch = useDispatch<AppDispatch>();
  const getQuantity = (productId: number) => {
    const item = cartItems.find((item) => item._id === productId);
    return item ? item.quantity : null
  }
  const handleAddToCart = (product: Product) => {
    dispatch(addtoCart(product))
  }

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
       
      {products.map((product) => (
        <div key={product._id} className="max-full flex flex-col items-center justify-center shadow-2xl rounded-3xl my-5 py-8 px-10">
          <div>
            <img src={product.image} alt={product.title} className="w-full max-w-sm object-cover" />
          </div>

          <h2><strong>{product.title}</strong></h2>
          <p><strong>Price:</strong> ${product.price}</p><br />
          <button className="border-2 border-yellow-400 py-2 px-4  rounded-3xl transition duration-300 hover:bg-yellow-300" onClick={() => handleAddToCart(product)}>Add to Cart <i>{getQuantity(product._id)}</i></button>
          <Link to={`/product/${product._id}`}>More Details</Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsCard;