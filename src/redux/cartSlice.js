import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        users: [],
        user: {},
        numberCart: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
                state.numberCart++;
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
            state.numberCart--;
        },
        payment: (state) => {
            state.cart = [];
            state.numberCart = 0;
        },
        register: (state, action) => {
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        },
        login: (state, action) => {
            return {
                ...state,
                user: action.payload,
            };
        },
        logout: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, payment, register, login, logout } =
    cartSlice.actions;
