
type Product = {
    _id: number;
    category: string;
    brand: string;
    image: string;
    price: number;
    title: string;
    description: string;
    quantity:number;
};

const CartCard = ({ items}:Product[]) => {
  return (
    <div>CartCard</div>
  )
}

export default CartCard