import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

// Define the type for a single product
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

interface CartState {
    cartItems: Product[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}

const productsFromLocalStorage = localStorage.getItem("products");
const initialState: CartState = {
    cartItems: productsFromLocalStorage ? JSON.parse(productsFromLocalStorage) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};


export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: (state, action: PayloadAction<Product>) => {
            const { cartItems } = state;
            const tempProduct = { ...action.payload };
            const existingItem = cartItems.find(item => item._id === tempProduct._id);

            if (!existingItem) {
                state.cartItems.push({ ...tempProduct, quantity: 1 });
            } else {
                existingItem.quantity += 1;
            }

            toast.success(`${action.payload.title} added to your cart!`, { position: "top-right" });
            localStorage.setItem("products", JSON.stringify(state.cartItems));
            state.cartTotalQuantity += 1;
            state.cartTotalAmount = calculateGrandTotal(state.cartItems);
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const { cartItems } = state;
            const item = cartItems.find(item => item._id === action.payload);

            if (item) {
                item.quantity += 1;
                state.cartTotalQuantity += 1;
                state.cartTotalAmount = calculateGrandTotal(cartItems);
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const { cartItems } = state;
            const item = cartItems.find(item => item._id === action.payload);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.cartTotalQuantity -= 1;
                state.cartTotalAmount = calculateGrandTotal(cartItems);
            }
        },
        updateCartItems: (state, action) => {
            state.cartItems = action.payload;
            state.cartTotalAmount = calculateGrandTotal(action.payload);
        }
    },
});

const calculateGrandTotal = (cartItems: Product[]): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const { addtoCart, incrementQuantity, decrementQuantity, updateCartItems } = CartSlice.actions;
export default CartSlice.reducer;


