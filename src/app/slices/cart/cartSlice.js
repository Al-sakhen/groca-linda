import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    // each order have list of items and total price
    orders: [],
    // orders: [
    //     {
    //         items: [
    //             {    ,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // actions
        addToCart: (state, action) => {
            // state.items.push(action.payload);
            state.items = [
                ...state.items.filter((item) => item.id !== action.payload.id),
                action.payload,
            ];
        },
        removeFromTheCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        addOrder: (state, action) => {
            // first: get the last id
            if(state.orders.length === 0) {
                state.orders.push({
                    id : 1,
                    items: action.payload.items,
                    totalPrice: action.payload.totalPrice,
                });
                state.items = [];
                return;
            }
            const lastId = state.orders[state.orders.length - 1].id ?? 1;
            // second: create new order
            const newOrder = {
                id: lastId + 1,
                items: action.payload.items,
                totalPrice: action.payload.totalPrice,
            };
            // third: add the new order to the orders array
            state.orders.push(newOrder);
            // forth: clear the items array
            state.items = [];
        },

        removeOrder: (state, action) => {
            state.orders = state.orders.filter(
                (order) => order.id !== action.payload
            );
        }
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromTheCart ,addOrder ,removeOrder } = cartSlice.actions;

export default cartSlice.reducer;
