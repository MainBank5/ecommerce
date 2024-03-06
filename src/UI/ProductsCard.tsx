import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
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
};

type ProductsType = {
    products: Product[];
};



const ProductsCard = ({ products } :ProductsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = (product) => {
    dispatch(addtoCart(product ))
  }
  
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div  key={product._id} className="max-full flex flex-col items-center justify-center shadow-2xl rounded-3xl my-5 py-8 px-10">
          <div>
            <img src={product.image} alt={product.title} className="w-full max-w-sm object-cover" />
          </div>
          
          <h2><strong>{product.title}</strong></h2>
          <p><strong>Price:</strong> ${product.price}</p><br/>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <Link to={`/product/${product._id}`}>More Details</Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsCard;