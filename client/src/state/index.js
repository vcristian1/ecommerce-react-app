import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    // Anytime we have setItems, we can change the items to equal what we are passing into the payload.
    reducers: {
        // Normally, you should'nt mutate state in redux but redux toolkil allows you to write code as if you are mutating state even though under the hood that is not actually happening. 
        // This is due to the package Redux toolkit has called immutable. Long Story Short, a function that updates global state. 
        setItems: (state, action) => {
            state.items = action.payload;
        },
        // Function to update the state of the cart
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item];
        },
        removeFromCart: (state, action) => {
            // Keep all items that are NOT equal to the id that we are passing in. So the ID we want to remove, we would pass in.
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count++;
                }
                return item
            });
        },
        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item
            });
        },
        setIsCartOpen: (state) => {
            // This function is flipping what the current state is.
            state.isCartOpen = !state.isCartOpen
        }
    }
})

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;