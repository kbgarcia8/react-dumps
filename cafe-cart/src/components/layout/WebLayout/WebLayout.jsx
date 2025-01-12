import PropTypes from "prop-types"
import "./WebLayout.styles"

const WebLayout = ({header, main, footer}) => {
    return (
        <>
            <header>{header}</header>
            <main>{main}</main>
            <footer>{footer}</footer>
        </>
    )
}

WebLayout.propTypes = {
    header: PropTypes.node.isRequired,
    main: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired
}

export default WebLayout;