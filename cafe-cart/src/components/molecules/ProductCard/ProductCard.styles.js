import styled from 'styled-components';
import GenericButton from '../../atoms/Button/Button';

export const ProductImage = styled.img`
    width: 90%;
    height: 50%;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export const ProductTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ProductDescription = styled.p`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.85rem;
    font-weight: 400;
    margin-top: 0.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 100%;
    max-height: 30%;
    padding: 0.25rem;
    overflow: hidden;
`;

export const AddToCartButton = styled(GenericButton)`
    margin: 0.25rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
    background-color: green;
    color: white;
    width: 12.5%;
    height: 75%;
    background-color: #3C5E83;

    & .button-icon-and-text {
    width: 100%;
    }
    & .button-icon-and-text img {
        width: 75%;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 10%;
    padding-inline: 0.5rem;
    border: 1px solid blue;
`;

export const ProductSize = styled.span`
    margin-left: 0.25rem;
    font-size: 0.85rem;
    font-weight: 700;
    border: 1px solid blue;
    width: 25%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ProductPrice = styled.span`
    position: relative;
    left: 45%;
    font-size: 0.70rem;
    font-weight: 500;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 1rem;
    background-color: #f8f8f8;
    padding: 1.25rem;
    border: 1px solid blue;
`;

export default {
    ProductImage,
    ProductTitle,
    ProductDescription,
    ProductInfoContainer,
    PriceContainer,
    AddToCartButton,
    ProductSize,
    ProductPrice,
    ProductCardContainer
};