import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeContext.jsx";
import { palette } from "../../../styles/theme.js";
import * as styled from "./ProductCard.styles.js";
import CartIcon from "../../atoms/SVG/CartIcon.jsx";

const ProductCard = ({
    productImage,
    productTitle,
    productDescription,
    prices,
    dataCategory,
    dataIndex,
    handleAddToCartButton,
    className,
    isDarkCard
}) => {
    const { theme } = useTheme();
    
    const commonThemeSwitch = {
        cardShadowColor: theme.name == "lightTheme" ? palette.shadow1 : palette.shadow2
    }

    const lightCardThemeSwitch = {
        cardBackgroundColor: theme.name == "lightTheme" ? palette.accent : palette.neutral5,
        descriptionTextColor: theme.name == "lightTheme" ? palette.primary2 : palette.neutral3,
        titleTextColor: theme.name == "lightTheme" ? palette.primary1 : palette.secondary1,
        buttonColor: theme.name == "lightTheme" ? palette.neutral4 : palette.neutral5
    }

    const darkCardThemeSwitch = {
        cardBackgroundColor: theme.name == "lightTheme" ? palette.neutral5 : palette.accent,
        descriptionTextColor: theme.name == "lightTheme" ? palette.neutral3 : palette.primary2,
        titleTextColor: theme.name == "lightTheme" ? palette.secondary1 : palette.primary1,
        buttonColor: theme.name == "lightTheme" ? palette.neutral5 : palette.neutral4
    }

    return (
        <styled.ProductCardContainer 
            className={className} 
            $cardBackgroundColor={isDarkCard ? darkCardThemeSwitch.cardBackgroundColor : lightCardThemeSwitch.cardBackgroundColor}
            $cardShadowColor={commonThemeSwitch.cardShadowColor}
        >
            <styled.ProductImage src={productImage} alt={`${productTitle}-image`}/>
            <styled.ProductInfoContainer>
                <styled.ProductTitle 
                    $textColor={isDarkCard ? darkCardThemeSwitch.titleTextColor : lightCardThemeSwitch.titleTextColor}>{productTitle}</styled.ProductTitle>
                <styled.ProductDescription 
                    $textColor={isDarkCard ? darkCardThemeSwitch.descriptionTextColor : lightCardThemeSwitch.descriptionTextColor}
                >
                    {productDescription}
                </styled.ProductDescription>                
            </styled.ProductInfoContainer>
            {Object.keys(prices).map((size) => (
                <styled.PriceContainer key={`${productTitle}-${size}`}>
                    <styled.AddToCartButton 
                        svg={<CartIcon/>}
                        $buttonColor={isDarkCard ? lightCardThemeSwitch.buttonColor : darkCardThemeSwitch.buttonColor}
                        dataAttributes={{
                            "data-size": size,
                            "data-price": prices[size],
                            "data-category": dataCategory,
                            "data-index": dataIndex
                        }}
                        onClick={handleAddToCartButton}
                    />
                    <styled.ProductSize
                        $textColor={isDarkCard ? darkCardThemeSwitch.titleTextColor : lightCardThemeSwitch.titleTextColor}
                    >{size}</styled.ProductSize>
                    <styled.ProductPrice
                        $textColor={isDarkCard ? darkCardThemeSwitch.descriptionTextColor : lightCardThemeSwitch.descriptionTextColor}
                    >{prices[size]}</styled.ProductPrice>
                </styled.PriceContainer>
            ))}
        </styled.ProductCardContainer>
    );
}

ProductCard.propTypes = {
    productImage: PropTypes.string,
    productTitle: PropTypes.string,
    productDescription: PropTypes.string,
    prices: PropTypes.object.isRequired,
    className: PropTypes.string,
    isDarkCard: PropTypes.bool
}

export default ProductCard;