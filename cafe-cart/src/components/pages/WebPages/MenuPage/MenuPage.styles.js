import styled from "styled-components";
import { v } from "../../../../styles/variables.js";
import GenericButton from "../../../atoms/Button/index.js";
import ProductCard from "../../../molecules/ProductCard/index.js";
import Divider from "../../../atoms/Divider/index.js";

export const MenuPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
    
    &:hover {
        color: ${({theme}) => theme.textColor3};
    }
`;

export const MenuCardContainer = styled.div`
    max-width: 100vw;
    height: 100vh;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: minmax(75%, auto); 
    gap: ${v.spacing.small};
    padding: ${v.spacing.small};
`;

export const MenuCardContainer2 = styled.div`
    margin-top: ${v.spacing.small};
    max-width: 100vw;
    min-height: 175vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 32.5%;
    gap: ${v.spacing.xsmall};
    padding: ${v.spacing.small};
`;

export const MenuCardContainerAll = styled.div`
    display: flex;
    height: 100vh;
    overflow-y: auto;
    flex-direction: column;
    padding: ${v.spacing.small};
`;

export const CartItemCard = styled(ProductCard)`
    width: 95%;
    height: 100%;
`;

export const StyledDivider = styled(Divider)`
    height: 10%;
    width: 97.5%;
    & div {
        border-width: 2px;
    }
    & span {
        right: 42.5%;
        width: 8.75%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const StyledDivider2 = styled(StyledDivider)`
    width: 100%;
`