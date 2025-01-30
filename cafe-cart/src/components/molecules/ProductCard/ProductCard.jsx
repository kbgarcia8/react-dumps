import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeProvider";
import { palette, lightTheme } from "../../../styles/theme";
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
    isDarkCard
}) => {

    const { theme, toggleTheme } = useTheme();
    
    const commonThemeSwitch = {
        cardShadowColor: theme == lightTheme ? palette.shadow1 : palette.shadow2
    }

    const lightCardThemeSwitch = {
        cardBackgroundColor: theme == lightTheme ? palette.accent : palette.neutral5,
        descriptionTextColor: theme == lightTheme ? palette.primary2 : palette.neutral3,
        titleTextColor: theme == lightTheme ? palette.primary1 : palette.secondary1,
        buttonColor: theme == lightTheme ? palette.neutral4 : palette.neutral5
    }

    const darkCardThemeSwitch = {
        cardBackgroundColor: theme == lightTheme ? palette.neutral5 : palette.accent,
        descriptionTextColor: theme == lightTheme ? palette.neutral3 : palette.primary2,
        titleTextColor: theme == lightTheme ? palette.secondary1 : palette.primary1,
        buttonColor: theme == lightTheme ? palette.neutral5 : palette.neutral4
    }

    return (
        <ProductCardContainer 
            className={className} 
            cardBackgroundColor={isDarkCard ? darkCardThemeSwitch.cardBackgroundColor : lightCardThemeSwitch.cardBackgroundColor}
            cardShadowColor={commonThemeSwitch.cardShadowColor}
        >
            <ProductImage src={productImage} alt={`${productTitle}-image`}/>
            <ProductInfoContainer>
                <ProductTitle 
                    textColor={isDarkCard ? darkCardThemeSwitch.titleTextColor : lightCardThemeSwitch.titleTextColor}>{productTitle}</ProductTitle>
                <ProductDescription 
                    textColor={isDarkCard ? darkCardThemeSwitch.descriptionTextColor : lightCardThemeSwitch.descriptionTextColor}
                >
                    {productDescription}
                </ProductDescription>                
            </ProductInfoContainer>
            {Object.keys(prices).map((size, index) => (
                <PriceContainer key={`${productTitle}-${size}`}>
                    <AddToCartButton 
                        source={"/shopping-cart.svg"}
                        buttonColor={isDarkCard ? lightCardThemeSwitch.buttonColor : darkCardThemeSwitch.buttonColor}
                    />
                    <ProductSize
                        textColor={isDarkCard ? darkCardThemeSwitch.titleTextColor : lightCardThemeSwitch.titleTextColor}
                    >{size}</ProductSize>
                    <ProductPrice
                        textColor={isDarkCard ? darkCardThemeSwitch.descriptionTextColor : lightCardThemeSwitch.descriptionTextColor}
                    >{prices[size]}</ProductPrice>
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