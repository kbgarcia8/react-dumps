import React from "react";
import PropTypes from "prop-types";
import { ProductImage,
    ProductTitle,
    ProductDescription,
    ProductInfoContainer,
    PriceContainer,
    AddToCartButton,
    ProductSize,
    ProductPrice,
    ProductCardContainer } from "./Product.styles";

const ProductCard = ({  }) => {

    return (
        <ProductCardContainer>
            <ProductImage src={"https://www.errenskitchen.com/wp-content/uploads/2022/05/Chicken-Sundried-Tomato-Pasta-1-4.jpg"} alt={"no-image"}/>
            <ProductInfoContainer>
                <ProductTitle>Baked Penne With Chicken and Sun-Dried Tomatoes</ProductTitle>
                <ProductDescription>
                    It has chicken breasts, mushrooms, and sun-dried tomatoes. Shredded provolone and grated Parmesan make it super creamy.
                </ProductDescription>                
            </ProductInfoContainer>
            <PriceContainer>
                <AddToCartButton source={"/shopping-cart.svg"}/>
                <ProductSize>Small</ProductSize>
                <ProductPrice>$7.99</ProductPrice>
            </PriceContainer>
        </ProductCardContainer>
    );
}

export default ProductCard;