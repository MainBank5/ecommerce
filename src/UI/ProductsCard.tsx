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
  return (
    <div>
      {products.map((product) => (
        <div key={product._id} className="flex flex-col items-center justify-center shadow-lg rounded-lg my-5 px-7">
          <img src={product.image} alt={product.title} />
          <h2><strong>{product.title}</strong></h2>
          <p>{product.description}</p>
          <strong>Category:</strong> {product.category}<br/>
          <strong>Brand:</strong> {product.brand}<br/>
          <strong>Price:</strong> ${product.price}<br/>
        </div>
      ))}
    </div>
  )
}

export default ProductsCard;