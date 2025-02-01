import styled from 'styled-components';
import GenericButton from '../../atoms/Button/Button';
import { v } from '../../../styles/variables';
//Refactor designing of ProductCard component same as ginawa sa Divider

export const ProductImage = styled.img`
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export const ProductTitle = styled.h2.attrs(props => ({
    textColor: props.textColor
}))`
    font-size: 1rem;
    font-weight: ${v.fontWeight.bold};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    color: ${(props) => props.textColor};
    margin-top: ${v.spacing.xxsmall};
    margin-bottom: ${v.spacing.xxxsmall};
`;

export const ProductDescription = styled.p.attrs(props => ({
    textColor: props.textColor
}))`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.85rem;
    line-height: 1.25rem;
    margin-top: ${v.spacing.xxxsmall};
    font-weight: ${v.fontWeight.medium};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    color: ${(props) => props.textColor};
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
export const AddToCartButton = styled(GenericButton).attrs(props => ({

    buttonColor: props.buttonColor,
    borderColor: props.borderColor
}))`
    margin: 0.25rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
    width: 12.5%;
    height: 75%;
    background-color: ${(props) => props.buttonColor};

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
`;

export const ProductSize = styled.span.attrs(props => ({
    textColor: props.textColor
}))`
    margin-left: 0.25rem;
    font-size: 0.85rem;
    font-weight: 700;
    width: 25%;
    color: ${(props) => props.textColor};
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
`;

export const ProductPrice = styled.span.attrs(props => ({
    textColor: props.textColor
}))`
    position: relative;
    left: 45%;
    font-size: 0.70rem;
    color: ${(props) => props.textColor};
    font-weight: ${v.fontWeight.bold};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
`;

export const ProductCardContainer = styled.div.attrs(props => ({
    cardBackgroundColor: props.cardBackgroundColor,
    cardShadowColor: props.cardShadowColor
}))`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 ${(props) => props.cardShadowColor};    
    background-color: ${(props) => props.cardBackgroundColor};
    padding: 1.25rem;
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