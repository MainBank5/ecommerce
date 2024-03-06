import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the type for a single product
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


interface CartState {
    cartItems:Product [];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}
const initialState: CartState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount:0,
}

export const CartSlice = createSlice({
    name: "cart",
    initialState, // Initialize cart as an empty array of products
    reducers: {
        addtoCart: (state, action: PayloadAction<Product>) => {
            const tempProduct = {...action.payload ,quantity :1 };
            const isExistInTheCart= state.cartItems.find(item=> item._id === action.payload._id)
             if (!isExistInTheCart){  
                 state.cartItems.push(tempProduct);
             }else{
                isExistInTheCart.quantity +=1 ;
             }
        }
    }
});

export const { addtoCart } = CartSlice.actions;
export default CartSlice.reducer;

