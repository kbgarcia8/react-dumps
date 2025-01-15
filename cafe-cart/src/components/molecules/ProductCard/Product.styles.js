import styled from 'styled-components';

export const ProductImage = styled.img`
    width: 90%;
    height: 50%;
    object-fit: fill;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export const ProductTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ProductDescription = styled.p`
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    border: 1px solid blue;
    max-width: 90%;
    max-height: 30%;
    padding: 0.25rem;
    overflow: hidden;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0.25rem;
`;

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 1rem;
    border-radius: 1rem;
    background-color: #f8f8f8;
    padding: 1.25rem;
    border: 1px solid blue;
`;

export default {
    ProductTitle,
    ProductDescription,
    ProductInfoContainer,
    ProductImage, 
    ProductCardContainer
};