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
    ProductCardContainer
} from "./Product.styles";

const ProductCard = ({
    productImage,
    productTitle,
    productDescription,
    prices,
    className
}) => {

    return (
        <ProductCardContainer className={className}>
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