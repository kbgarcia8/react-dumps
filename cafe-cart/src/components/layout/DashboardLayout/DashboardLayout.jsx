import {React, useState} from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { useGlobalProvider } from "../../../context/ContextProvider";
import * as styled from "./DashboardLayout.styles";

const DashboardLayout = ({header, sidebar}) => {

    const {database} = useGlobalProvider();
    const [cart, setCart] = useState([]);

    const addToCart = (e) => {
        const {size, price, category, index} = e.currentTarget.dataset;
        const itemInDatabase = database[category][index];
        console.log(itemInDatabase.image);
        setCart((prevCart) =>         
            [...prevCart].indexOf(prevCart.find((entry => entry.name === `${itemInDatabase.name}` && entry.size === `${size}` ))) === -1
            ? [...prevCart, {name: `${itemInDatabase.name}`, thumbnail: `${itemInDatabase.image}`, size: `${size}`,price: `${price}`, quantity: 1}]
            : prevCart.map((entry) => (entry.name === `${itemInDatabase.name}` && entry.size === `${size}`) && {...entry, quantity: entry.quantity + 1})
        )
    }
    
    const removeFromCart = (e) => {
        
    }

    return (
        <styled.DashboardLayoutWrapper>
            <styled.DashboardLayoutHeader>{header}</styled.DashboardLayoutHeader>
            <styled.DashboardLayoutSidebar>{sidebar}</styled.DashboardLayoutSidebar>
            <styled.DashboardLayoutContent>
                <Outlet context={{cart, addToCart}}/>
            </styled.DashboardLayoutContent>
        </styled.DashboardLayoutWrapper>
    )
}

DashboardLayout.propTypes = {
    header: PropTypes.element,
    sidebar: PropTypes.element
}

export default DashboardLayout;