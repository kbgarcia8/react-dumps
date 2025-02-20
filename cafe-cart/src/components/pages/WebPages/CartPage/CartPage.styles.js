import styled from "styled-components";
import { v } from "../../../../styles/variables";
import GenericButton from "../../../atoms/Button";
import ProductCard from "../../../molecules/ProductCard";

export const CartPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 10px solid black;
    padding: ${v.spacing.small};
`
export const MenuFilterButtonsSpace = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: ${v.spacing.small};
`;

export const MenuFilterButton = styled(GenericButton)`
    border-radius: ${v.borderRadius.small};
    background: transparent;
    color: ${({theme}) => theme.textColor1};

    & .button-icon-and-text span {
        font-size: ${v.fontSize.xsmall};
        font-family: ${v.fonts.secondary};
        font-weight: ${v.fontWeight.bold};
    }    
`;

export const MenuCardContainer = styled.div`
    border: 2px solid red;
    max-width: 100vw;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
    gap: ${v.spacing.small};
    padding: ${v.spacing.small};
`;

export const CartItemCard = styled(ProductCard)`
    border: 2px solid red;
`;
//https://stackoverflow.com/questions/66817240/how-to-make-css-grid-container-keep-responsive-square-size