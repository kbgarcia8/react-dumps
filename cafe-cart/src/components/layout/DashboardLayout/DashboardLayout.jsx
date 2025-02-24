import {React, useState} from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { useGlobalProvider } from "../../../context/ContextProvider";
import * as styled from "./DashboardLayout.styles";

const DashboardLayout = ({header, sidebar}) => {

    const {database} = useGlobalProvider();
    const [cart, setCart] = useState([]);

    const addToCart = (e) => {
        console.log(e.currentTarget.dataset)
        const {size, price, category, index} = e.currentTarget.dataset;
        
        setCart((prevCart) => [...prevCart, {name: `${database[category][index].name}`, price: `${price}`, quantity: ''}])
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