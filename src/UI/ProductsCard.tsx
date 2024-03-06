import Button from "./Button";

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

const addtoCart = () => {
  console.log("added to cart")
}
const ProductsCard = ({ products } :ProductsType) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product._id} className="flex flex-col items-center justify-center shadow-2xl rounded-3xl my-5 py-8 px-10">
          <img src={product.image} alt={product.title} className="w-52" />
          <h2><strong>{product.title}</strong></h2>
          <p><strong>Price:</strong> ${product.price}</p><br/>
          <Button onclick={addtoCart}>Add to Cart</Button>
          <a href={`/product/${product._id}`}>More Details</a>
        </div>
      ))}
    </div>
  )
}

export default ProductsCard;