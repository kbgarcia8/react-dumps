import styled from 'styled-components';
import Button from '../../atoms/Button/Button.styles';
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
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: 0.5rem;
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

export const AddToCartButton = styled(GenericButton)`
  margin: 0.5rem;
  background-color: green;
  color: white;
  width: 20%;
  height: 100%;
  & .button-icon-and-text {
    width: 100%;
    border: 1px solid blue;
  }
    & .button-icon-and-text img {
        width: 100%;
        height: 100%;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 10%;
    padding-inline: 1rem;
    border: 1px solid blue;
`;

export const ProductSize = styled.span`
    font-size: 0.75rem;
    font-weight: 700;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ProductPrice = styled.span`
    font-size: 0.65rem;
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
    margin: 1rem;
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