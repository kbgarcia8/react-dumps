import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Outlet } from 'react-router-dom';
import * as styled from "./MobileLayout.styles.js"

const MobileLayout = ({header, footer}) => {

    return (
        <>
            <styled.MobileLayoutContainer>
                <styled.MobileHeader>
                    {header}
                </styled.MobileHeader>
                <styled.MobileContent>
                    <Outlet />
                </styled.MobileContent>
                <styled.MobileFooter>
                    {footer}
                </styled.MobileFooter>
            </styled.MobileLayoutContainer>
        </>
    )
}

MobileLayout.propTypes = {
    header: PropTypes.node.isRequired,
    main: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired
}

export default MobileLayout;