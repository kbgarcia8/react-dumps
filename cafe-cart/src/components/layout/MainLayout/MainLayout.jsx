import { React, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { getScrollbarWidth } from '../../../utils/utils.js'
import * as styled from "./MainLayout.styles";

const MainLayout = ({header, footer}) => {

    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        setScrollbarWidth(getScrollbarWidth());        
    }, []);

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const handleLogin = (e) => {console.log(usernameRef.current.value)}

    return (
        <styled.MainLayoutWrapper $scrollbarWidth={scrollbarWidth}>
            <styled.MainLayoutHeader>{header}</styled.MainLayoutHeader>
            <styled.MainLayoutContent>
                <Outlet context={{
                    usernameRef,
                    passwordRef,
                    handleLogin
                }}/>
            </styled.MainLayoutContent>
            <styled.MainLayoutFooter>{footer}</styled.MainLayoutFooter>
        </styled.MainLayoutWrapper>
    )
}

export default MainLayout;