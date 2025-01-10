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