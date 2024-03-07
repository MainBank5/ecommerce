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

const initialState: CartState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const loadCartFromLocalStorage = (): CartState => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
        const cartState: CartState = JSON.parse(cartData);
        const cartTotalQuantity = cartState.cartItems.reduce((total, item) => total + item.quantity, 0);
        return { ...cartState, cartTotalQuantity };
    } else {
        return initialState;
    }

};

export const CartSlice = createSlice({
    name: "cart",
    initialState: loadCartFromLocalStorage(),
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

            toast.success(`${action.payload.title} added to your cart!`, { position: "top-left" });
            localStorage.setItem("cart", JSON.stringify(state));
            state.cartTotalQuantity += 1;
            state.cartTotalAmount = calculateGrandTotal(state.cartItems);
        },
        removefromCart: (state, action: PayloadAction<number>) => {
            const{cartItems} = state;
            const itemToRemove = cartItems.find((item) => item._id === action.payload);
            if(itemToRemove) {
               state.cartItems = cartItems.filter(item => item._id !== action.payload);
               state.cartTotalQuantity -= itemToRemove.quantity;
               state.cartTotalAmount = calculateGrandTotal(state.cartItems);
               toast.info('Removed from the cart', {position:"top-left"});
            }
            localStorage.setItem("cart", JSON.stringify(state));
            
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const { cartItems } = state;
            const item = cartItems.find(item => item._id === action.payload);

            if (item) {
                item.quantity += 1;
                state.cartTotalQuantity += 1;
                state.cartTotalAmount = calculateGrandTotal(cartItems);
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const { cartItems } = state;
            const item = cartItems.find(item => item._id === action.payload);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.cartTotalQuantity -= 1;
                state.cartTotalAmount = calculateGrandTotal(cartItems);
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },

        clearAllItems:(state) => {
            state.cartItems= [];
            state.cartTotalQuantity =  0;
            state.cartTotalAmount = 0;
            localStorage.removeItem("cart");
        }

    },
});

const calculateGrandTotal = (cartItems: Product[]): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const { addtoCart, incrementQuantity, decrementQuantity, removefromCart, clearAllItems } = CartSlice.actions;
export default CartSlice.reducer;



