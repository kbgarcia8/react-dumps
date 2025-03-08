import {React, useState, useReducer} from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { useGlobalProvider } from "../../../context/ContextProvider";
import * as styled from "./DashboardLayout.styles";

const initialCart = [];

function reducer(state, action){
    const {size, price, quantity, index} = action.data || {};
    switch (action.type) {        
        case "addToCart":
        console.log('added to cart')
        return [...state].indexOf(state.find((entry => entry.name === `${action.databaseItem.name}` && entry.size === `${size}` ))) === -1
                ? [...state, {name: `${action.databaseItem.name}`, thumbnail: `${action.databaseItem.image}`, size: `${size}`,price: `${price}`, quantity: 1, total: parseInt(price)}]
                : state.map((entry) => (entry.name === `${action.databaseItem.name}` && entry.size === `${size}`) ? {...entry, quantity: entry.quantity + 1, total: entry.total + parseInt(price)} : entry);
        case "increment":
            return state.map((entry, idx) => idx === parseInt(index) ? {...entry, quantity: entry.quantity + 1, total: parseInt(entry.total) + parseInt(entry.price)} : entry);
        case "decrement":
                if(parseInt(quantity) === 1) {            
                    return state.filter((entry, idx) => idx !== parseInt(index));
                } else {
                    return state.map((entry, idx) => idx === parseInt(index) ? {...entry, quantity: entry.quantity -1, total: parseInt(entry.total) - parseInt(entry.price)} : entry);
                }
            
        case "reset":
            return initialCart;
        default:
            return state;
    }
}

const DashboardLayout = ({header, sidebar}) => {

    const {database} = useGlobalProvider();
    const [state, dispatch] = useReducer(reducer, initialCart);
    
    const addToCart = (e) => {
        const {size, price, category, index} = e.currentTarget.dataset;
        const itemInDatabase = database[category][index];
        
        dispatch({ type: "addToCart" , data: {size, price, category, index}, databaseItem: itemInDatabase})
    }

    const incrementItem = (e) => {
        const {index} = e.currentTarget.dataset;
        dispatch({ type: "increment" , data: {index}})
    }

    const decrementItem = (e) => {
        const {index,quantity} = e.currentTarget.dataset;
        dispatch({ type: "decrement" , data: {index,quantity}})
    }
    
    const removeFromCart = (e) => {
        //instantly remove from cart
    }

    return (
        <styled.DashboardLayoutWrapper>
            <styled.DashboardLayoutHeader>{header}</styled.DashboardLayoutHeader>
            <styled.DashboardLayoutSidebar>{sidebar}</styled.DashboardLayoutSidebar>
            <styled.DashboardLayoutContent>
                <Outlet context={{state, addToCart, incrementItem, decrementItem}}/>
            </styled.DashboardLayoutContent>
        </styled.DashboardLayoutWrapper>
    )
}

DashboardLayout.propTypes = {
    header: PropTypes.element,
    sidebar: PropTypes.element
}

export default DashboardLayout;