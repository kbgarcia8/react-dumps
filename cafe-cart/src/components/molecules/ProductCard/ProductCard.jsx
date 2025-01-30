import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeProvider";
import { lightTheme, darkTheme } from "../../../styles/theme";
import { ProductImage,
    ProductTitle,
    ProductDescription,
    ProductInfoContainer,
    PriceContainer,
    AddToCartButton,
    ProductSize,
    ProductPrice,
    ProductCardContainer
} from "./ProductCard.styles";

const ProductCard = ({
    productImage,
    productTitle,
    productDescription,
    prices,
    className,
    cardBackgroundColor,
}) => {

    const { theme, toggleTheme } = useTheme();

    /*const internalThemeSwitch = {
        cardBackgroundColor: {theme == lightTheme ? darkTheme.backgroundColor1 : lightTheme.backgroundColor1 }
    }*/

        console.log(theme == darkTheme ? 'YES' : 'NO')

    return (
        <ProductCardContainer 
            className={className} 
            cardBackgroundColor={cardBackgroundColor}
        >
            <ProductImage src={productImage} alt={`${productTitle}-image`}/>
            <ProductInfoContainer>
                <ProductTitle>{productTitle}</ProductTitle>
                <ProductDescription>
                    {productDescription}
                </ProductDescription>                
            </ProductInfoContainer>
            {Object.keys(prices).map((size, index) => (
                <PriceContainer key={`${productTitle}-${size}`}>
                    <AddToCartButton source={"/shopping-cart.svg"}/>
                    <ProductSize>{size}</ProductSize>
                    <ProductPrice>{prices[size]}</ProductPrice>
                </PriceContainer>
            ))}
        </ProductCardContainer>
    );
}

ProductCard.propTypes = {
    productImage: PropTypes.string,
    productTitle: PropTypes.string,
    productDescription: PropTypes.string,
    prices: PropTypes.object.isRequired
}

export default ProductCard;